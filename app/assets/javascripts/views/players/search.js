App.Views.PlayerSearch = Backbone.CompositeView.extend({
  template: JST['players/search'],
  className: 'static-homepage',

  events: {
    "click button[type=submit]": "search"
  },

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
      this.position = place.geometry.location;
      this.$('#lat').val(this.position.lat());
      this.$('#lng').val(this.position.lng());
    }.bind(this));

    google.maps.event.addDomListener(document.getElementById("searchTextField"), 'blur', function() {
      google.maps.event.trigger(this, 'focus');
      google.maps.event.trigger(this, 'keydown', {
        keyCode: 13
      });
    });
  },

  search: function(event) {
    event.preventDefault();
    // TODO: Save the game
    // var game = new App.Models.Game();
    // game.save($(event.target).serializeJSON(), { wait: true });
    // TODO render the search results page
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    this.renderSportSelector();
    this.addPlacesSearch();
    this.addDatePicker();
    return this;
  },

  addDatePicker: function() {
    $(function() {
      $('#datetimepicker1').datetimepicker({
        sideBySide: true,
        inline: true,
      });
      $('#datetimepicker1').data("DateTimePicker").minDate(moment());
    });

    $("#datetimepicker1").on("dp.change", function(event) {
      var epoch_seconds = event.date.unix();
      this.$('input#date').val(epoch_seconds);
    }.bind(this));
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

    this.addSubview('.sport-select', view);
  }
});
