App.Views.SportForm = Backbone.CompositeView.extend({
  template: JST['sports/form'],

  initialize: function() {

  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.displayMap();

    return this;
  },

  displayMap: function() {
    var view = new App.Views.GoogleMaps({
      model: App.currUser
    });
    this.$('.gmap-container').append(view.$el);
    // TODO: initialize map with center points
    // from currentuser ip address converted to 
    // lattitude and longitude, use google or geocoder
    view.initializeMap();
    this.addSubview('.map-container', view);
  }
});
