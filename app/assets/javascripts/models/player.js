App.Models.Player = Backbone.Model.extend({
  urlRoot: 'api/players',

  sports: function() {
    if (!this._sports) {
      this._sports = new App.Collections.Sports([], {
        player: this
      });
    }

    return this._sports;
  },

  games: function() {
    if (!this._games) {
      this._games = new App.Collections.Games([], {
        player: this
      });
    }

    return this._games;
  },

  parse: function(response) {
    if (response.sports) {
      this.sports().set(response.sports, {
        parse: true
      });
      delete response.sports;
    }

    if (response.games) {
      this.games().set(response.games, {
        parse: true
      });
      delete response.games;
    }

    return response;
  }
});
