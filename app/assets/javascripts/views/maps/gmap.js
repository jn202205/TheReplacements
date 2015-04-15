App.Views.GoogleMaps = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function(options) {
    this.parentView = options.parentView;
    this.listenTo(this.model, 'sync', this.initializeMap);
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

    this._setupDrawingManager();

    if (this.model.get('playing_area')) {
      this.polygon = new google.maps.Polygon({
        paths: google.maps.geometry.encoding.decodePath(this.model.get('playing_area')),
        editable: true,
        strokeColor: "#8d2222",
        strokeWeight: 3,
        fillColor: "#8d2222"
      });

      this.polygon.setMap(this._map);
      this.parentView.overlay = this.polygon;
      this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));

      google.maps.event.addListener(this.polygon, 'click', function() {
        this.setSelection(this.polygon);
      }.bind(this));

      this.polygon.getPaths().forEach(function(path, index) {
        google.maps.event.addListener(path, 'set_at', function() {
          this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));
        }.bind(this));
      }.bind(this));

      this.disableDrawingManager(this.drawingManager);
    }

    function handleNoGeolocation(errorFlag) {
      alert("Geolocation service failed.");
      var location = sf;
      map.setCenter(location);
    }


    this.attachMapListeners();

    setTimeout(function() {
      google.maps.event.trigger(this._map, 'resize');
    }.bind(this), 0);
  },

  _setupDrawingManager: function() {
    this.drawingManager = new google.maps.drawing.DrawingManager({
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

    this.drawingManager.setMap(this._map);

    google.maps.event.addListener(this.drawingManager, "overlaycomplete", function(event) {
      this.polygon = event.overlay;
      this.parentView.overlay = this.polygon;
      this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));

      this.disableDrawingManager(this.drawingManager);

      this.parentView.drawingManager = this.drawingManager;
      google.maps.event.addListener(this.polygon, 'click', function() {
        this.setSelection(this.polygon);
      });

      this.polygon.getPaths().forEach(function(path, index) {
        google.maps.event.addListener(path, 'set_at', function() {
          this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));
        }.bind(this));
      }.bind(this));

      this.setSelection(this.polygon);

    }.bind(this));

    this.parentView.drawingManager = this.drawingManager;
  },

  disableDrawingManager: function(dm) {
    dm.setDrawingMode(null);
    dm.setOptions({
      drawingControl: false,
    });
  },

  setSelection: function(shape) {
    this.parentView.selectedShape = shape;
    shape.setEditable(true);
  },


  attachMapListeners: function() {},

});
