App.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/dashboard'],
  className: 'static-homepage',

  initialize: function() {},

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.renderAreaPlayers();
    this.renderSidebar();
    return this;
  },

  renderAreaPlayers: function() {
    App.players.fetch({
      data: {
        limit: 3
      }
    });
    var view = new App.Views.AreaPlayers({
      collection: App.players,
    });

    this.addSubview('.sections', view);
  },

  renderHeader: function() {
    var view = new App.Views.Header({
      model: this.model
    });

    this.addSubview('.dashboard-head', view);
  },

  renderSidebar: function() {
    App.sports.fetch({
      data: { limit: 6 }
    });
    var view = new App.Views.Sidebar({
      collection: App.sports
    });

    this.addSubview('.sidebar', view);
  }

});
