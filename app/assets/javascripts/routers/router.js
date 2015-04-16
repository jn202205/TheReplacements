App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": 'renderDashboard',
    "sports_form": 'renderSportForm',
    "player_search": 'renderPlayerSearch',
    "player_search/:id/:lat/:lng": 'renderPlayerResults'
  },

  renderDashboard: function() {
    var view = new App.Views.Dashboard({
      model: App.currUser
    });
    this._swapView(view);
  },

  renderPlayerResults: function(id, lat, lng) {
    var playerResults = new App.Collections.Players();
    playersResults.fetch({
      data: {
        sport_id: id
      }
    });

    var view = new App.Views.PlayersResultsView({
      collection: playerResults,
      lat: lat,
      lng: lng
    });
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
    if (this.currentView) {
      this.currentView.remove();
    }
    this.$rootEl.html(view.$el);
    view.render();
  }
});
