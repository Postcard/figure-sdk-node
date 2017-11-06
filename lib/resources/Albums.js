'use strict';

var FigureResource = require('../FigureResource');
var figureMethod = FigureResource.method;

module.exports = FigureResource.extend({

  path: 'users/me/albums',
  includeBasic: [
    'get', 'edit', 'create', 'getAll', 'del'
  ],
  
  getPortraits: figureMethod({
    method: 'GET',
    path: '/{slug}/portraits',
    urlParams: ['slug']
  }),

  getMyTickets: figureMethod({
  	method: 'GET',
  	path: '/my_tickets'
  })

});