App.Views.PlayerCard = Backbone.View.extend({
  template: JST['players/player_card'],
  className: "player-card",

  events: {
    'click a.profile-btn': 'gotoProfile'
  },

  gotoProfile: function(event) {
    event.preventDefault();
    var player_id = $(event.target).data('id');
    Backbone.history.navigate('player/' + player_id, { trigger: true });
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      player: this.model
    });
    this.$el.html(content);

    return this;
  }
});
