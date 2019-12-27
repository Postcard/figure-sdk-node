'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'post_rows',
  includeBasic: ['create', 'get', 'edit', 'getAll', 'del']

});