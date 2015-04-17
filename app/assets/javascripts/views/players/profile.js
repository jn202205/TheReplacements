App.Views.PlayerProfile = Backbone.CompositeView.extend({
  template: JST['players/profile'],
  className: 'static-homepage',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      player: this.model
    });
    this.$el.html(content);

    this.renderProfileHead();
    this.renderPlayerSports();
  },

  renderProfileHead: function() {
    var view = new App.Views.ProfileHeader({
      model: this.model
    });

    this.addSubview('.dashboard-head', view);
  },

  renderPlayerSports: function() {
    var userSports = this.model.sports();

    var view = new App.Views.UserSports({
      isProfile: true,
      collection: userSports
    });

    this.addSubview('.your-sports', view);
  }
});
