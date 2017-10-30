'use strict';

Figure.DEFAULT_HOST = 'api.figure.co';
Figure.DEFAULT_PROTOCOL = 'https';
Figure.DEFAULT_TIMEOUT = 60000; // 1 min


var resources = {
  Photobooths: require('./resources/Photobooths.js'),
  Places: require('./resources/Places.js'),
  Events: require('./resources/Events.js'),
  TicketTemplates: require('./resources/TicketTemplates.js'),
  Texts: require('./resources/Texts.js'),
  TextVariables: require('./resources/TextVariables.js'),
  Images: require('./resources/Images.js'),
  ImageVariables: require('./resources/ImageVariables.js'),
  Portraits: require('./resources/Portraits.js'),
  Albums: require('./resources/Albums.js'),
  A1Posters: require('./resources/A1Posters.js'),
  A3Posters: require('./resources/A3Posters.js'),
  A1PosterOrders: require('./resources/A1PosterOrders.js'),
  Newspapers: require('./resources/Newspapers.js'),
  Posts: require('./resources/Posts.js'),
  PostRows: require('./resources/PostRows.js'),
  PostRowCells: require('./resources/PostRowCells.js'),
  FigureGif: require('./resources/FigureGif.js'),
  PlaceGifs: require('./resources/PlaceGifs.js'),
  EventGifs: require('./resources/EventGifs.js'),
  Users: require('./resources/Users.js'),
  Analytics: require('./resources/Analytics.js'),
  Auth: require('./resources/Auth.js')
};

Figure.resources = resources;

function Figure(options){

  var opts = typeof options === 'object' ? options : {};

  if (!(this instanceof Figure)) {
    return new Figure(opts);
  }

  this._api = {
    token: opts.token || null,
    host: opts.host || Figure.DEFAULT_HOST,
    protocol: opts.protocol || Figure.DEFAULT_PROTOCOL,
    basePath: opts.basePath || '',
    timeout: opts.timeout || Figure.DEFAULT_TIMEOUT
  }

  this._prepResources();

}

Figure.prototype = {

  setToken: function(token) {
    if (token) {
      this._setApiField(
        'token',
        token)
    }
  },

  setBasePath: function(basePath) {
    this._setApiField(
      'basePath',
      basePath);
  },

  setHost: function(host, protocol) {
    this._setApiField('host', host);
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol);
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Figure.DEFAULT_TIMEOUT : timeout
    );
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

