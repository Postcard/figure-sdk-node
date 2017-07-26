'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'post_row_cells',
  includeBasic: [
    'create'
  ],

});