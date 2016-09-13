/**
 * Created by diego on 12-09-16.
 */
import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';

// Our modules
import modConstant from './constant.js';
import modConfigIonic from './config/ionic.config.js';
import modConfigRouter from './config/router.config.js';
import modRun from './run.js';
import modHome from './home/home.module.js';
import modMenu from './menu/menu.module.js';

// Style entry point
import './scss/bootstrap';

// Create our prototype module
let mod = angular.module('prototype', [
  'ionic',
  'ui.router',
  modConstant,
  modHome,
  modMenu
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// Run
mod.run(modRun);

export default mod = mod.name;