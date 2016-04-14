'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'images',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]

});