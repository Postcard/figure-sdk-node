'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'textvariables',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]

});