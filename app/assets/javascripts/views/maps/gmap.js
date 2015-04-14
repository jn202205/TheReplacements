App.Views.GoogleMaps = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function(options) {
    this.parentView = options.parentView;
  },

  // longitude: D, Latitude: k
  initializeMap: function() {

    var mapOptions = {
      center: {
        lat: 37.7833,
        lng: -122.4167
      },
      zoom: 13
    };

    var sf = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    var browserSupportFlag;

    this._map = new google.maps.Map(this.el, mapOptions);

    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this._map.setCenter(initialLocation);
      }.bind(this), function() {
        handleNoGeolocation(browserSupportFlag);
      });
    }

    function handleNoGeolocation(errorFlag) {
      alert("Geolocation service failed.");
      var location = sf;
      map.setCenter(location);
    }

    this._setupDrawingManager();

    this.attachMapListeners();

    setTimeout(function(){
      google.maps.event.trigger(this._map, 'resize');
    }.bind(this), 0);
  },

  _setupDrawingManager: function() {
    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON
        ]
      },
      polygonOptions: {
        editable: true,
        strokeColor: "#8d2222",
        strokeWeight: 3,
        fillColor: "#8d2222",
      }
    });

    drawingManager.setMap(this._map);

    google.maps.event.addListener(drawingManager, "overlaycomplete", function(event) {
      var overlayCoords = event.overlay.getPath();
      this.parentView.overlay = event.overlay;
      //TODO store this polygon in a string column in user table
      var polygon = google.maps.geometry.encoding.encodePath(overlayCoords);
    }.bind(this));
  },

  attachMapListeners: function() {},

});
