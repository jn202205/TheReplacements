App.Views.SportButton = Backbone.View.extend({
  template: JST['sports/sport_button'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ sport: this.model });
    this.$el.html(content);

    return this;
  },

});
