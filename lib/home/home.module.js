/**
 * Created by diego on 12-09-16.
 */
import modConfig from './home.config';

let mod = angular.module('prototype.home', [
  'ionic',
  'ui.router',
  'prototype.constant',
  'wp-api-angularjs'
]);

mod.config(modConfig);


export default mod = mod.name
