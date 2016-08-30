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
  }),

  instagramSubscriberCount: figureMethod({
    method: 'GET',
    path: '/instagram_subscriber_count'
  }),

  twitterFollowerCount: figureMethod({
    method: 'GET',
    path: '/twitter_follower_count'
  })
});
