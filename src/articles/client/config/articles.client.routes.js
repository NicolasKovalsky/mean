'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'src/articles/client/views/list-articles.client.view.html'
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'src/articles/client/views/create-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'src/articles/client/views/view-article.client.view.html'
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'src/articles/client/views/edit-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
