'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'places',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ],
  shareByEmail: figureMethod({
    method: 'POST',
    path: '/{slug}/share_by_email',
    urlParams: ['slug']
  })

});