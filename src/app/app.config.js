import { sitemap } from './app.constants';

function config($locationProvider, $routeProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when(sitemap.home.path, {
    page: sitemap.home,
    template: '<home></home>'
  });

  $routeProvider.when(sitemap.about.path, {
    page: sitemap.about,
    template: '<about></about>'
  });

  $routeProvider.otherwise({ redirectTo: '/' });
};

export default config;
