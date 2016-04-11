'use strict';

Figure.DEFAULT_HOST = 'api.figuredevices.com';
Figure.DEFAULT_PROTOCOL = 'http';
// Use node's default timeout
Figure.DEFAULT_TIMEOUT = require('http').createServer().timeout;

var Portraits = require('./resources/Portraits.js')
var resources = {
  Portraits: Portraits
};

Figure.resources = resources;

function Figure(token){

  if (!(this instanceof Figure)) {
    return new Figure(token);
  }

  this._api = {
    token: token || null,
    host: Figure.DEFAULT_HOST,
    protocol: Figure.DEFAULT_PROTOCOL,
    timeout: Figure.DEFAULT_TIMEOUT
  }

  this._prepResources();

}

Figure.prototype = {

  setToken: function(token) {
    if (token) {
      this._setApiField(
        'token',
        'Bearer ' + token)
    }
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Figure.DEFAULT_TIMEOUT : timeout
    );
  },


  setHost: function(host, port, protocol) {
    this._setApiField('host', host);
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol);
  },

  _setApiField: function(key, value) {
    this._api[key] = value;
  },

  getApiField: function(key) {
    return this._api[key];
  },

  _prepResources: function() {
    for (var name in resources) {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this);
    }
  },

}

module.exports = Figure;

