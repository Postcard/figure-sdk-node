'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'portraits',
  includeBasic: [
    'get', 'edit', 'getAll', 'del'
  ],

  getAllPublic: figureMethod({
    method: 'GET',
    path: '/public'
  }),

  statistics: figureMethod({
  	method: 'GET',
  	path: '/statistics'
  })
});
