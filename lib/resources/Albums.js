'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'users/me/albums',
  includeBasic: [
    'get', 'edit', 'create', 'getAll', 'del'
  ]
  
});