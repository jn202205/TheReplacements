App.Views.GameListing = Backbone.CompositeView.extend({
  template: JST['games/game_listing'],
  tagName: 'li',
  className: 'game-listing col-xs-12',

  events: {
    'click a.btn': 'playerSearch'
  },

  initialize: function(options) {
    this.sport = options.sport;
    this.listenTo(this.model, 'sync', this.codeLatLng);
    this.listenTo(this.sport, 'sync', this.render);
  },

  playerSearch: function(event) {
    event.preventDefault();
    Backbone.history.navigate('game/' + this.model.id, {
      trigger: true
    });
  },

  render: function() {
    var content = this.template({
      game: this.model,
      sport: this.sport,
    });
    this.$el.html(content);

    return this;
  }
});
