import angular from 'angular';
import component from './about.component';

const module = angular
  .module('app.components.pages.about', [])
  .component('about', component);

export default module;
