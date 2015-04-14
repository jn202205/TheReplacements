App.Views.GoogleMaps = Backbone.View.extend({
  attributes: {
    id: "map-canvas"
  },

  initialize: function() {},

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
      //TODO store this polygon in a string column in user table
      var polygon = google.maps.geometry.encoding.encodePath(overlayCoords);
    });

    // RECREATING THE POLYGON FROM ENCODED PATH
    // newShape = new google.maps.Polygon({
    //   paths: google.maps.geometry.encoding.decodePath(myPoly), //DECODE SAVED PATH
    //   NONE OF THIS IS NECESSARY UNLESS I WANT TO REDRAW THE USERS BOUNDARIES
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 3,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    //   editable: true
    // });

    this.attachMapListeners();
  },

  attachMapListeners: function() {},

});
