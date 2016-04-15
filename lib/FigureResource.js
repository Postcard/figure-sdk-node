var request = require('superagent');
var utils = require('./utils');
var path = require('path');
var url = require('url');
var Promise = require('bluebird');

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Stripe Resource Sub-Classes
FigureResource.extend = utils.protoExtend;

// Expose method-creator
FigureResource.method = require('./FigureMethod');
FigureResource.BASIC_METHODS = require('./FigureMethod.basic');

function FigureResource(figure) {
  this._figure = figure;
  this.basePath = figure.getApiField('basePath');
  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = FigureResource.BASIC_METHODS[methodName];
    }, this);
  }
  this.initialize.apply(this, arguments);
}

/**
 * Encapsulates request logic for a Figure Resource
 */
FigureResource.prototype = {

  path: '',

  initialize: function() {},

  createFullPath: function(commandPath, urlData) {

    return path.join(
      this.path,
      typeof commandPath == 'function' ?
        commandPath(urlData) : commandPath,
      '/'
    )
  },

  createDeferred: function(callback) {
    var deferred = Promise.defer();

    if (callback) {
      // Callback, if provided, is a simply translated to Promise'esque:
      // (Ensure callback is called outside of promise stack)
      deferred.promise.then(function(res) {
          setTimeout(function() { callback(null, res) }, 0);
        }, function(err) {
          setTimeout(function() { callback(err, null); }, 0);
        });
    }

    return deferred;
  },

  _errorHandler: function(res, callback) {
    callback(new Error('An error occurred with out connection to Figure'), null)
  },

  _responseHandler: function(res, callback) {
    var self = this;
    if (!res.ok) {
      if (res.status == 401) {
        err = new Error('Not Authorized');
      } else if (res.status == 429) {
        err = new Error('Too many requests');
      } else {
        err = new Error('An error occurred');
      }  
      return callback(err, null); 
    } 
    callback(null, res.body)
  },

  _request: function(method, path, data, query, headers, callback) {

    var self = this;
    var req;

    var fullUrl = url.format({
      protocol: self._figure.getApiField('protocol'),
      host: self._figure.getApiField('host'),
      pathname: path
    });

    switch (method) {
      case 'GET':
        req = request.get(fullUrl);
        break;
      case 'POST':
        req = request.post(fullUrl);
        break;
      case 'PUT':
        req = request.put(fullUrl);
        break;
      case 'DELETE':
        req = request.del(fullUrl);
        break;
    }

    if (query) {
      req = req.query(query);
    }

    // set headers
    if (headers) {
      Object.keys(headers).forEach(function(k) {
        req.set(k, headers[k]);
      });
    }
    req.set('Accept', 'application/json');
    req.set('User-Agent', 'Figure NodeBindings');
    var token = this._figure.getApiField('token')
    if (token) {
      req.set('Authorization', 'Bearer ' + token);
    }

    var timeout = self._figure.getApiField('timeout');
    req.timeout(timeout);

    if (data) {
      req.send(data);
    }

    req.end(function(err, res) {
      if (err) {
        self._errorHandler(res, callback);
      } else {
        self._responseHandler(res, callback);
      }
    });
  }
}

module.exports = FigureResource;