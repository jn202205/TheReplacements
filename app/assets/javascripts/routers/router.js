App.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $("#main");
  },

  routes: {
    '': 'showLandingPage',
    'dashboard': 'dashboard'
  },

  landingPage: function() {
    var view = new LandingView();
    this._swapView(view);
  },

  _swapView: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
