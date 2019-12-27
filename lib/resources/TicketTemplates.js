'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'ticket_templates',
  includeBasic: ['create', 'get', 'getAll', 'edit', 'del'],

  preview: figureMethod({
    method: 'GET',
    path: '/{id}/preview',
    urlParams: ['id']
  })

});