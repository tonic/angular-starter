import angular from 'angular';
import home from './home/home.module';
import about from './about/about.module';
import service from './pages.service';

const module = angular
  .module('app.components.pages', [
    home.name,
    about.name
  ])
  .factory('PagesService', service);

export default module;
