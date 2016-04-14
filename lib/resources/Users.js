'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'users',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ],
  me: {
  	get: figureMethod({
  		method: 'GET',
  		path: '/me'
  	}),
  	edit: figureMethod({
  		method: 'PUT',
  		path: '/me'
  	}),
  	
		/**
		* @summary Edit password when logged in
		*
		* @param {Object} [options={}] - in the form of data
		* @param {String} data.old_password - old password
		* @param {String} data.new_password - new password
		* @param {String} data.re_new_password - new password confirmation
		*/
  	editPassword: figureMethod({
  		method: 'POST',
  		path: '/users/me/password/reset/'
  	})
  },

  register: figureMethod({
  	method: 'POST'
  }),

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
  	path: '/auth/token'
  }),

	/**
	* @summary Send an email to the user with a password reset link
	*
	* @param {Object} [options={}] - in the form of data
	* @param {String} data.email- the email to send reset password link to
	*/
  resetPassword: figureMethod({
  	method: 'POST',
  	path: '/users/password/reset/'
  }),

	/**
	* @summary Set a new password
	*
	* @param {Object} [options={}] - in the form of data
	* @param {String} data.uid - uid from the link received in the email
	* @param {String} data.token - token from the link received in the email
	* @param {String} data.new_password - new password
	* @param {String} data.re_new_password - confirmation of the new password
	*/
  setNewPassword: figureMethod({
  	method: 'POST',
  	path: '/users/password/reset/confirm/'
  })

});
