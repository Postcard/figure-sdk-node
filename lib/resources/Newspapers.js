'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'newspapers',
  includeBasic: ['create', 'get', 'getAll'],
  print: figureMethod({
    method: 'GET',
    path: '/{id}/render/print/',
    urlParams: ['id']
  })
});