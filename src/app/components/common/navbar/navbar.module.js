import angular from 'angular';
import component from './navbar.component';

const module = angular
  .module('app.components.common.navbar', [])
  .component('navbar', component);

export default module;
