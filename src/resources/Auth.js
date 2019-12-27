'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'auth',

	/**
	* @summary Login to Figure API
	*
	* @param {Object} [options={}] in the form of data
	* @param {String} data.username - the email
	* @param {String} data.password - the password
	* @param {String} data.client_id - OAuth client id
	* @param {String} data.client_secret - Oauth client secret
	*/
  login: figureMethod({
  	method: 'POST',
  	path: '/token'
  }),

});
