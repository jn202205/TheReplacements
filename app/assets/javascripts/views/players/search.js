App.Views.PlayerSearch = Backbone.CompositeView.extend({
  template: JST['players/search'],
  className: 'static-homepage',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  addPlacesSearch: function() {
    var input = document.getElementById('searchTextField');
    var searchBox = new google.maps.places.SearchBox(input, {});

    var location = searchBox.getPlaces();

    google.maps.event.addListener(searchBox, 'places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      var place = places[0];
      //this is the position to check if its within a players playing area
      var position = place.geometry.location;

      console.log(position);
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.renderSportSelector();
    this.addPlacesSearch();

    return this;
  },

  renderHeader: function() {
    var view = new App.Views.Header({
      model: this.model
    });

    this.addSubview('.dashboard-head', view);
  },

  renderSportSelector: function() {
    var view = new App.Views.SportSelector({
      collection: this.collection
    });

    this.addSubview('.sections', view);
  }
});
