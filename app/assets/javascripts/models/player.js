App.Models.Player = Backbone.Model.extend({
  urlRoot: 'api/players',

  sports: function() {
    if (!this._sports) {
      this._sports = new App.Collections.Sports([], { player: this });
    }

    return this._sports;
  },

  parse: function(response) {
    if(response.sports) {
      this.sports().set(response.sports, { parse: true });
      delete response.sports;
    }

    return response;
  }
});
