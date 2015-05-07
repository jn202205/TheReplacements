App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": 'renderDashboard',
    "sports_form": 'renderSportForm',
    "player_search": 'renderPlayerSearch',
    "player_search/:id": 'renderPlayerSearch',
    "player_results/:id/:lat/:lng": 'renderPlayerResults',
    "game/:id": 'renderGameSearch',
    "player/:id": 'renderPlayerProfile'
  },

  renderPlayerProfile: function(id) {
    var user = new App.Models.Player({
      id: id
    });
    user.fetch();
    var view = new App.Views.PlayerProfile({
      model: user
    });

    this._swapView(view);
  },

  renderDashboard: function() {
    App.currUser.fetch();
    var view = new App.Views.Dashboard({
      model: App.currUser
    });
    this._swapView(view);
  },

  renderGameSearch: function(id) {
    var game = App.currUser.games().getOrFetch(id);
    var sport = new App.Models.Sport({
      id: game.get('sport_id')
    });
    sport.fetch();

    var playerResults = new App.Collections.Players();
    playerResults.fetch({
      data: {
        sport_id: game.get('sport_id')
      }
    });

    var view = new App.Views.PlayerResultsView({
      model: game,
      user: App.currUser,
      collection: playerResults,
      sport: sport
    });

    this._swapView(view);
  },

  renderPlayerSearch: function(id) {
    var sports = new App.Collections.Sports();
    sports.fetch();
    var view = new App.Views.PlayerSearch({
      model: App.currUser,
      collection: sports,
      sport_id: id
    });

    this._swapView(view);
  },

  renderSportForm: function() {
    var sports = new App.Collections.Sports();
    sports.fetch();

    var view = new App.Views.SportForm({
      model: App.currUser,
      collection: sports
    });

    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
