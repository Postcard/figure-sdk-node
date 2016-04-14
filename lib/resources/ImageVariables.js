'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'imagevariables',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]

});