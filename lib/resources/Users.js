'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'users',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ],

  me: figureMethod({
    method: 'GET',
    path: '/me'
  }),

  editMe: figureMethod({
    method: 'PUT',
    path: '/me'
  }),

  editMyPassword: figureMethod({
    method: 'POST',
    path: '/users/me/password/reset/'
  }),

  register: figureMethod({
  	method: 'POST',
    path: '/register'
  }),

	/**
	* @summary Send an email to the user with a password reset link
	*
	* @param {Object} [options={}] - in the form of data
	* @param {String} data.email- the email to send reset password link to
	*/
  resetPassword: figureMethod({
  	method: 'POST',
  	path: '/password/reset/'
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
  	path: '/password/reset/confirm/'
  })

});
