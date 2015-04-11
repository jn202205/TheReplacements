App.Collections.Players = Backbone.Collection.extend({
  url: 'api/players',
  model: App.Models.Player,
});

App.players = new App.Collections.Players();
