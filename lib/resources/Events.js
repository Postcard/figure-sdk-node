'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'events',
  includeBasic: [
    'create', 'get', 'getAll', 'edit', 'del'
  ],
  shareByEmail: figureMethod({
    method: 'POST',
    path: '/{uuid}/share_by_email',
    urlParams: ['uuid']
  })

});
