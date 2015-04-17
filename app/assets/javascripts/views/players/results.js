App.Views.PlayerResultsView = Backbone.CompositeView.extend({
  template: JST['players/search_results'],
  className: 'static-homepage',

  initialize: function(opts) {
    this.eventLoc = new google.maps.LatLng(opts.lat, opts.lng);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.renderPlayers();
    return this;
  },

  renderHeader: function() {
    var view = new App.Views.Header({
      model: this.model
    });

    this.addSubview('.dashboard-head', view);
  },

  renderPlayers: function() {
    this.collection.each(function(player) {
      if (player.get('playing_area')) {
        var playingArea = new google.maps.Polygon({
          paths: google.maps.geometry.encoding.decodePath(player.get('playing_area'))
        });
        if (google.maps.geometry.poly.containsLocation(this.eventLoc, playingArea)) {
          this.addPlayerCard(player);
        }
      }
    }.bind(this));
  },

  addPlayerCard: function(player) {
    var view = new App.Views.PlayerCard({
      model: player
    });
    this.addSubview('.results', view);
  }
});
