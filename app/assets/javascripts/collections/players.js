App.Collections.Players = Backbone.Collection.extend({
  url: 'api/users',
  model: App.Models.Player
});
