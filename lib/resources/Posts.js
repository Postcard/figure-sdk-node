'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'posts',
  includeBasic: ['create', 'get', 'edit', 'getAll', 'del']

});