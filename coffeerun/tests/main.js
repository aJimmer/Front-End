eval(require('fs').readFileSync('./scripts/datastore.js', 'utf8'));
eval(require('fs').readFileSync('./scripts/truck.js', 'utf8'));

(function (global) {
  'use strict';
  var App = global.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  global.myTruck = myTruck;
})(global);
