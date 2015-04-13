App.Views.SportListing = Backbone.View.extend({
  template: JST['sports/sport_listing'],
  tagName: 'li',
  className: 'sport-listing col-xs-12',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      sport: this.model
    });
    this.$el.html(content);

    return this;
  }
});
