let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.single', {
      url: '/single/id',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;