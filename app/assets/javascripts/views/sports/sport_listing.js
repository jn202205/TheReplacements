App.Views.SportListing = Backbone.View.extend({
  template: JST['sports/sport_listing'],
  tagName: 'li',
  className: 'sport-listing col-xs-12',

  events: {
    'click a.btn': 'playerSearch'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  playerSearch: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/player_search', {
      trigger: true
    });
  },

  render: function() {
    var content = this.template({
      sport: this.model
    });
    this.$el.html(content);

    return this;
  }
});
