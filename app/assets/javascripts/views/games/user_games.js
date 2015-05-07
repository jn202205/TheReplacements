App.Views.UserGames = Backbone.CompositeView.extend({
  template: JST['games/user_games'],
  className: 'user-games',

  initialize: function(opts) {
    this.isProfile = opts.isProfile;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.addGames();
    this.attachSubviews();
    return this;
  },

  addGame: function(game) {
    var sport = new App.Models.Sport({id: game.get('sport_id')});
    sport.fetch();
    var view = new App.Views.GameListing({
      model: game,
      sport: sport
    });

    this.addSubview('.game-listings', view);
  },

  addGames: function() {
    this.collection.each(this.addGame.bind(this));
  }
});
