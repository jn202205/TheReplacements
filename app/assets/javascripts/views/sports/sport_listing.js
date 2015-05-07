App.Views.SportListing = Backbone.CompositeView.extend({
  template: JST['sports/sport_listing'],
  tagName: 'li',
  className: 'sport-listing col-xs-12',

  events: {
    'click a.btn': 'playerSearch'
  },

  initialize: function(opts) {
    this.isProfile = opts.isProfile;
    this.listenTo(this.model, 'sync', this.render);
  },

  playerSearch: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/player_search/' + this.model.id, {
      trigger: true
    });
  },

  render: function() {
    var content = this.template({
      sport: this.model,
      profile: this.isProfile
    });
    this.$el.html(content);

    return this;
  }
});
