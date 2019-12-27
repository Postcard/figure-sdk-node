'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'submitted_places',
  includeBasic: ['create', 'get', 'getAll', 'edit', 'del'],

  submit: figureMethod({
    method: 'POST',
    path: '/{google_places_id}/submit',
    urlParams: ['google_places_id']
  })

});