App.Views.PlayerCard = Backbone.View.extend({
  template: JST['players/player_card'],
  className: "player-card",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ player: this.model });
    this.$el.html(content);

    return this;
  }
});
