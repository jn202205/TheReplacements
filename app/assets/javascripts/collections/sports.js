App.Collections.Sports = Backbone.Collection.extend({
  url: 'api/sports',
  model: App.Models.Sport,

  initialize: function (models, options) {
    this.player = options.player;
  }
});
