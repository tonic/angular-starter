import angular from 'angular';
import component from './primary.component';

const module = angular
  .module('app.components.layouts.primary', [])
  .component('primary', component);

export default module;
