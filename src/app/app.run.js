import { sitemap } from './app.constants';

function run($rootScope, $route) {
  'ngInject';

  $rootScope.route = $route;
  $rootScope.sitemap = sitemap;
};

export default run;
