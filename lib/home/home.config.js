/**
 * Created by diego on 12-09-16.
 */

export default function($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider.state('root.home', {
    url: "/home",
    views: {
      'content@root': {
        template: require("./home.html")
      }
    }
  });
  $urlRouterProvider.otherwise("/home");
}
