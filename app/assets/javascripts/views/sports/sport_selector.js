App.Views.SportSelector = Backbone.CompositeView.extend({
  template: JST['sports/sport_selector'],
  className: 'criteria',
  events: {
    'click label.sport': 'selectSport'
  },

  selectSport: function(event) {
    if(this.selectedSport) {
      this.selectedSport.parent('.sport-btn').removeClass('selected');
    }
    this.selectedSport = $(event.currentTarget);
    this.selectedSport.parent('.sport-btn').addClass('selected');
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      sports: this.collection
    });
    this.$el.html(content);
    this.addSports();

    return this;
  },

  addSports: function() {
    this.collection.each(this.addSportButton.bind(this));
  },

  addSportButton: function(sport) {
    var view = new App.Views.SportButton({
      className: 'sport-btn col-sm-2 col-xs-4',
      collection: this.collection,
      model: sport
    });
    this.addSubview('.sports', view);
  },
});
