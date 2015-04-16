App.Views.PlayerResultsView = Backbone.CompositeView.extend({
  template: JST['players/search_results'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
      

    return this;
  }
});
