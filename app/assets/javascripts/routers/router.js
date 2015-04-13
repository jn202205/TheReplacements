App.Routers.Router = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
   },

   routes: {
     "": 'renderDashboard'
   },

   renderDashboard: function() {
     view = new App.Views.Dashboard({
       model: App.currUser
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
