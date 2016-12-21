import angular from 'angular';
import ngRoute from 'angular-route';
import component from './app.component';
import components from './components/components.module';
import config from './app.config';
import run from './app.run';
import './app.styles.css';

const module = angular
  .module('app', [
    ngRoute,
    components.name
  ])
  .component('app', component)
  .config(config)
  .run(run);

export default module;
