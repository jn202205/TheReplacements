App.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/dashboard'],
  className: 'static-homepage',

  initialize: function() {},

  events: {
    'click .add-sport': 'addEditSports'
  },

  addEditSports: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/sports_form', {
      trigger: true
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.renderUserSports();
    this.renderAreaPlayers();
    this.renderSidebar();
    return this;
  },

  renderUserSports: function() {
    this.userSports = new App.Collections.Sports();
    this.userSports.fetch({
      data: {
        current_user: true
      }
    });
    var view = new App.Views.UserSports({
      collection: this.userSports
    });

    this.addSubview('.your-sports', view);
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
    this.sports = new App.Collections.Sports();
    this.sports.fetch({
      data: {
        limit: 6
      }
    });
    var view = new App.Views.Sidebar({
      collection: this.sports
    });

    this.addSubview('.sidebar', view);
  }

});
