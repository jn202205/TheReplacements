App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": 'renderDashboard',
    "sports_form": 'renderSportForm',
    "player_search": 'renderPlayerSearch'
  },

  renderDashboard: function() {
    var view = new App.Views.Dashboard({
      model: App.currUser
    });
    this._swapView(view);
  },

  renderPlayerSearch: function() {
    var view = new App.Views.PlayerSearch({
      model: App.currUser
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
