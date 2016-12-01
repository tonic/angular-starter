import angular from 'angular';
import component from './home.component';

const module = angular
  .module('app.components.pages.home', [])
  .component('home', component);

export default module;
