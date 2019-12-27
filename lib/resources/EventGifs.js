'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'gifs/event_gifs',
  includeBasic: ['get', 'getAll'],
  shareByEmail: figureMethod({
    method: 'POST',
    path: '/{id}/share_by_email',
    urlParams: ['id']
  })
});