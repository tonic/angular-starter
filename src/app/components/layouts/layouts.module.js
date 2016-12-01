import angular from 'angular';
import primary from './primary/primary.module';

const module = angular
  .module('app.components.layouts', [
    primary.name
  ]);

export default module;
