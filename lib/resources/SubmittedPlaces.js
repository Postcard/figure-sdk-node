'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'submitted_places',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ]
});