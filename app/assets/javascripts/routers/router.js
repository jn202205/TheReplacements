App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": 'renderDashboard',
    "sports_form": 'renderSportForm',
    "player_search": 'renderPlayerSearch',
    "player_results/:id/:lat/:lng": 'renderPlayerResults'
  },

  renderDashboard: function() {
    var view = new App.Views.Dashboard({
      model: App.currUser
    });
    this._swapView(view);
  },

  renderPlayerResults: function(id, lat, lng) {
    var sport = new App.Models.Sport({id: id});
    sport.fetch();
    var playerResults = new App.Collections.Players();
    playerResults.fetch({
      data: {
        sport_id: id
      }
    });
    var view = new App.Views.PlayerResultsView({
      model: App.currUser,
      collection: playerResults,
      lat: lat,
      lng: lng,
      sport: sport
    });

    this._swapView(view);
  },

  renderPlayerSearch: function() {
    var sports = new App.Collections.Sports();
    sports.fetch();
    var view = new App.Views.PlayerSearch({
      model: App.currUser,
      collection: sports
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
