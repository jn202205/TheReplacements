App.Views.PlayerCard = Backbone.View.extend({
  template: JST['players/player_card'],
  className: "player-card col-sm-4 col-xs-12",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ player: this.model });
    this.$el.html(content);

    return this;
  }
});
