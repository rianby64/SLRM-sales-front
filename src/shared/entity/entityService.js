;(function() {
  "use strict";
  
  angular
  .module('RDash')
  .service('entityManager', function() {
    
    var manager = {
      notifyError: function() { console.error('entityManager>>notifyError empty'); },
      notifyAdd: function() { console.error('entityManager>>notifyAdd empty'); },
      notifyRead: function() { console.error('entityManager>>notifyRead empty'); },
      notifyRemove: function() { console.error('entityManager>>notifyRemove empty'); },
      notifyUpdate: function() { console.error('entityManager>>notifyUpdate empty'); },
      add: function() { console.error('entityManager>>add empty'); },
      read: function() { console.error('entityManager>>read empty'); },
      remove: function() { console.error('entityManager>>remove empty'); },
      update: function() { console.error('entityManager>>update empty'); }
    };
    
    var that = this;
    
    this.entities = [];
    this.setupManager = function setupManager(new_manager) {
      if (new_manager.notifyError) { manager.notifyError = new_manager.notifyError; }
      
      if (new_manager.notifyAdd) { manager.notifyAdd = new_manager.notifyAdd; }
      if (new_manager.notifyRead) { manager.notifyRead = new_manager.notifyRead; }
      if (new_manager.notifyRemove) { manager.notifyRemove = new_manager.notifyRemove; }
      if (new_manager.notifyUpdate) { manager.notifyUpdate = new_manager.notifyUpdate; }
      
      if (new_manager.add) { manager.add = new_manager.add; }
      if (new_manager.read) { manager.read = new_manager.read; }
      if (new_manager.remove) { manager.remove = new_manager.remove; }
      if (new_manager.update) { manager.update = new_manager.update; }
    };
    
    this.add = function add(entity) {
      return manager
      .add(entity)
      .success(function(response) {
        manager.notifyAdd(response);
      })
      .error(manager.notifyError);
    }

    this.update = function update(entity) {
      return manager
      .update(entity)
      .success(function(response) {
        manager.notifyUpdate(response);
      })
      .error(manager.notifyError);
    }
    
    this.remove = function remove(entity) {
      return manager
      .remove(entity)
      .success(function(response) {
        manager.notifyRemove(entity); // HEY! I SHOULD PUT HERE response INSTEAD OF entity!
      })
      .error(manager.notifyError);
    }
    
    this.load = function load(criteria) {
      return manager
      .read(criteria)
      .success(function(response) {
        if (criteria) { manager.notifyReadOne(); }
        else { manager.notifyRead(response); }
      })
      .error(manager.notifyError);
    };
    
    this.init = function init() {
      if (that.entities.length === 0) {  // this is the only place were we use that.entities
        that.load();
      }
    }
    
  });
})();