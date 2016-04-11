'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'portraits',

  get: figureMethod({
    method: 'GET',
    path: '/{code}',
    urlParams: ['code']
  }),

  edit: figureMethod({
    method: 'PUT',
    path: '/{code}',
    urlParams: ['code']
  }),


  getAllPublic: figureMethod({
    method: 'GET',
    path: '/public'
  })
});
