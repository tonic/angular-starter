import angular from 'angular';
import home from './home/home.module';
import about from './about/about.module';

const module = angular
  .module('app.components.pages', [
    home.name,
    about.name
  ]);

export default module;
