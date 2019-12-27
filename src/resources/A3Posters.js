'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'a3_posters',
  includeBasic: [
    'get', 'edit', 'create', 'getAll', 'del'
  ]
  
});