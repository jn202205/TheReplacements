App.Views.AreaPlayers = Backbone.CompositeView.extend({
  template: JST['players/area_players'],
  className: 'area-players',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  addPlayerCard: function(player) {
    var view = new App.Views.PlayerCard({
      model: player
    });
    this.addSubview('.cards-container', view);
  },

  addPlayerCards: function() {
    this.collection.each(this.addPlayerCard.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.addPlayerCards();
    this.attachSubviews();
    return this;
  },

});
