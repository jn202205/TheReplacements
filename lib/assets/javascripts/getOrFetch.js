Backbone.Collection.prototype.getOrFetch = function(id) {
  var collection = this;

  var model = collection.get(id);
  if (model) {
    model.fetch();
  } else {
    model = new collection.model({
      id: id
    });
    model.fetch({
      success: function() {
        collection.add(model);
      }
    });
  }

  return model;
};
