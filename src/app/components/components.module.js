import angular from 'angular';
import common from './common/common.module';
import layouts from './layouts/layouts.module';
import pages from './pages/pages.module';

const module = angular
  .module('app.components', [
    common.name,
    layouts.name,
    pages.name
  ]);

export default module;
