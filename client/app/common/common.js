import angular from 'angular';
import Weather from './weather/weather';

let commonModule = angular.module('app.common', [
  Weather
])
  
.name;

export default commonModule;
