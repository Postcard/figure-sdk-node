'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'analytics',

  portraitCount: figureMethod({
    method: 'GET',
    path: '/portrait_count'
  }),

  posterCount: figureMethod({
    method: 'GET',
    path: '/poster_count'
  })
});
