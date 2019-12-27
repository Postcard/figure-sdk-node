'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'gifs/figure_gif',
  includeBasic: [],
  get: figureMethod({
    method: 'GET',
    path: ''
  }),
  shareByEmail: figureMethod({
    method: 'POST',
    path: '/share_by_email',
    urlParams: ['id']
  })
});