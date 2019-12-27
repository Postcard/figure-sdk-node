'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'photobooths',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]

});