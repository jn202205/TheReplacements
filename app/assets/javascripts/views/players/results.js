App.Views.PlayerResultsView = Backbone.CompositeView.extend({
  template: JST['players/search_results'],
  className: 'static-homepage',

  initialize: function(opts) {
    this.sport = opts.sport;
    this.user = opts.user;
    this.listenTo(this.user, 'sync', this.render);
    this.listenTo(this.sport, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      sport: this.sport
    });
    this.$el.html(content);
    this.renderHeader();
    this.renderPlayers();
    return this;
  },

  renderHeader: function() {
    var view;
    view = new App.Views.Header({
      model: App.currUser
    });

    this.addSubview('.dashboard-head', view);
  },

  renderPlayers: function() {
    var lat = this.model.get('lat'),
      lng = this.model.get('lng'),
      eventLoc = new google.maps.LatLng(lat, lng);
    _.each(this.collection.shuffle(), function(player) {
      if (player.get('playing_area')) {
        var playingArea = new google.maps.Polygon({
          paths: google.maps.geometry.encoding.decodePath(player.get('playing_area'))
        });
        if (google.maps.geometry.poly.containsLocation(eventLoc, playingArea)) {
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
