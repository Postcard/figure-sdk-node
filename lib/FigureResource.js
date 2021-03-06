'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var request = require('superagent');
var _path = require('path');
var url = require('url');
var Promise = require('bluebird');

var Error = require('./Error');
var utils = require('./utils');

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Stripe Resource Sub-Classes
FigureResource.extend = utils.protoExtend;

// Expose method-creator
FigureResource.method = require('./FigureMethod');
FigureResource.BASIC_METHODS = require('./FigureMethod.basic');

function FigureResource(figure) {
  this._figure = figure;
  if (this.includeBasic) {
    this.includeBasic.forEach(function (methodName) {
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

  initialize: function initialize() {},

  createFullPath: function createFullPath(commandPath, urlData) {

    return _path.join(this._figure.getApiField('basePath'), this.path, typeof commandPath == 'function' ? commandPath(urlData) : commandPath, '/');
  },

  createDeferred: function createDeferred(callback) {
    var deferred = Promise.defer();

    if (callback) {
      // Callback, if provided, is a simply translated to Promise'esque:
      // (Ensure callback is called outside of promise stack)
      deferred.promise.then(function (res) {
        setTimeout(function () {
          callback(null, res);
        }, 0);
      }, function (err) {
        setTimeout(function () {
          callback(err, null);
        }, 0);
      });
    }

    return deferred;
  },

  _errorHandler: function _errorHandler(error, callback) {
    callback(Error.FigureError.generate(error));
  },

  _responseHandler: function _responseHandler(res, callback) {
    if (res.status == 202) {
      // the resource is not available yet
      var err = new Error("This resource is not available yet");
      err.status = res.status;
      return callback(new Error.FigureNotAvailableYetError(err), null);
    }
    callback(null, res.body);
  },

  _request: function _request(method, path, data, files, query, headers, callback) {

    var self = this;
    var req;

    var fullUrl = path;
    var host = self._figure.getApiField('host');
    var protocol = self._figure.getApiField('protocol');
    if (host != null && protocol != null) {
      fullUrl = url.format({
        protocol: self._figure.getApiField('protocol'),
        host: self._figure.getApiField('host'),
        pathname: path
      });
    }

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
      Object.keys(headers).forEach(function (k) {
        req.set(k, headers[k]);
      });
    }
    req.set('Accept', 'application/json');
    var token = this._figure.getApiField('token');
    if (token) {
      req.set('Authorization', 'Bearer ' + token);
    }

    var timeout = self._figure.getApiField('timeout');
    req.timeout(timeout);

    if (data) {
      req.send(data);
    }

    if (files) {
      Object.keys(files).forEach(function (field) {
        var file = files[field];
        if (file.filename) {
          req.attach(field, file.filepath, file.filename);
        } else {
          req.attach(field, file.filepath);
        }
      });
    }

    req.end(function (err, res) {
      if (err && (err.code == 'ECONNREFUSED' || err.code == 'ECONNABORTED')) {
        // Figure API is not available or internet connection is lost
        callback(new Error.FigureConnectionError(err), null);
      } else if (err && res && res.error) {
        // throw different errors based on res.error.status
        self._errorHandler(_extends({}, res.error, { body: res.body }), callback);
      } else if (err) {
        // unknown error
        callback(new Error.FigureError(err), null);
      } else {
        self._responseHandler(res, callback);
      }
    });
  }
};

module.exports = FigureResource;