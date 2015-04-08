window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new App.Routers.Router();
    Backbone.history.start();
  }
};

