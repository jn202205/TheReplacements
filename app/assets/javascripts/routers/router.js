App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
   },

   routes: {
     "": 'renderDashboard',
     "sports_form": 'renderSportForm'
   },

   renderDashboard: function() {
    var view = new App.Views.Dashboard({
       model: App.currUser
     });
    this._swapView(view);
  },

  renderSportForm: function() {
    var view = new App.Views.SportForm({
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
