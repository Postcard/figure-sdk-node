'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'analytics',

  getReport: figureMethod({
    method: 'GET',
    path: 'report'
  })

});