import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';
import service from './weather.service';

let weatherModule = angular.module('weather', [
  uiRouter
])
.service('Weather', service)
.component('weather', weatherComponent)
.name;

export default weatherModule;
