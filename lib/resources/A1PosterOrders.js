'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'a1_poster_orders',
  includeBasic: ['create', 'get', 'getAll', 'edit', 'del']

});