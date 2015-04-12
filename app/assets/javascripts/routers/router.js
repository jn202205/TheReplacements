App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": 'listAreaPlayers'
  },

  listAreaPlayers: function() {
    App.players.fetch({
      data: {
        limit: 3
      }
    });

    var view = new App.Views.AreaPlayers({
      collection: App.players,
      el: '.area-players'
    });

    this._swapView(view);
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
