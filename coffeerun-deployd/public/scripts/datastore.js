(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };

  DataStore.prototype.get = function(key) {
    console.log(this.data[key]);
    return this.data[key];
  };

  DataStore.prototype.getAll = function() {
    console.log(this.data);
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
