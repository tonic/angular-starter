import angular from 'angular';
import box from './box/box.module';
import navbar from './navbar/navbar.module';

const module = angular
  .module('app.components.common', [
    box.name,
    navbar.name
  ]);

export default module;
