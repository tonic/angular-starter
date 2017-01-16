import angular from 'angular';
import component from './box.component';
import './box.css';

const module = angular
  .module('app.components.common.box', [])
  .component('box', component);

export default module;
