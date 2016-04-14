'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'events',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]

});
