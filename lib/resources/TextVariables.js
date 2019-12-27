'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'text_variables',
  includeBasic: ['create', 'get', 'getAll', 'edit', 'del']

});