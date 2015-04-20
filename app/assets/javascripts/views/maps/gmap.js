App.Views.GoogleMaps = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function(options) {
    this.parentView = options.parentView;
    this.listenTo(this.model, 'sync', this.initializeMap);
  },

  initializeMap: function() {
    var sf = new google.maps.LatLng(37.775270, -122.419498);
    var mapOptions = {
      center: sf,
      zoom: 12
    };
    this._map = new google.maps.Map(this.el, mapOptions);

    this._setupDrawingManager();

    //if there is only one key on the model, no info has come back yet
    //therefore playing area is always going to be undefined and map will 
    //always center on current location now polygon
    if (this.model.keys().length > 1) {
      var browserSupportFlag;
      var polygon = this.model.get('playing_area');
      var playing_area = (this.model.get('playing_area'));

      if (playing_area) {
        // find center of playing area
        var bounds = new google.maps.LatLngBounds();
        var i;
        playingAreaPaths = google.maps.geometry.encoding.decodePath(this.model.get('playing_area'));
        for (i = 0; i < playingAreaPaths.length; i++) {
          bounds.extend(playingAreaPaths[i]);
        }

        //redraw playing area
        var map = this._map;
        this.polygon = new google.maps.Polygon({
          paths: playingAreaPaths,
          map: map,
          editable: true,
          strokeColor: "#8d2222",
          strokeWeight: 3,
          fillColor: "#8d2222"
        });

        this._map.setCenter(bounds.getCenter());

        // pass reference of playing area to parent view
        this.parentView.overlay = this.polygon;
        this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));

        // add event listeners
        // listener for selecting polygon
        // google.maps.event.addListener(this.polygon, 'click', function() {
        //   this.setSelection(this.polygon);
        // }.bind(this));

        // listener for editing polygon
        this.polygon.getPaths().forEach(function(path, index) {
          google.maps.event.addListener(path, 'set_at', function() {
            this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));
          }.bind(this));
          google.maps.event.addListener(path, 'insert_at', function() {
            this.parentView.$('#playing-area').val(google.maps.geometry.encoding.encodePath(this.polygon.getPath()));
          }.bind(this));
        }.bind(this));

        // disable drawing manager when polygon is already drawn
        this.disableDrawingManager(this.drawingManager);
      } else {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
          var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this._map.setCenter(initialLocation);
        }.bind(this), function() {
          handleNoGeolocation(browserSupportFlag);
        });
      }
    }
    // if browser doesn't support location or user denies access to location
    // set map center to sf
    function handleNoGeolocation(errorFlag) {
      if (!browserSupportFlag) {
        alert("Geolocation service failed.");
        map.setCenter(sf);
      }
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
        google.maps.event.addListener(path, 'insert_at', function() {
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
