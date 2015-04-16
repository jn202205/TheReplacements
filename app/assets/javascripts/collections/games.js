App.Collections.Games = Backbone.Collection.extend({
  url: 'api/games',
  model: App.Models.Game,
});
