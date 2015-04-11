window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    new App.Routers.Router(options.$rootEl);
    Backbone.history.start();
  }
};

