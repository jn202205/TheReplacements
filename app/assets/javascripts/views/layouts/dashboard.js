App.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/dashboard'],

  initialize: function() {},

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.listAreaPlayers();
    return this;
  },

  renderHeader: function() {
    var currUser = new App.Models.Player({id: App.currUser});
    var view = new App.Views.Header({
      model: currUser
    });

    this.addSubview('.dashboard-head', view);
  },

  listAreaPlayers: function() {
    App.players.fetch({
      data: {
        limit: 3
      }
    });
    var view = new App.Views.AreaPlayers({
      collection: App.players,
    });

    this.addSubview('.area-players', view);
  },

});
