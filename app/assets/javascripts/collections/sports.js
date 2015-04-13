App.Collections.Sports = Backbone.Collection.extend({
  url: 'api/sports',
  model: App.Models.Sport
});

App.sports = new App.Collections.Sports();
