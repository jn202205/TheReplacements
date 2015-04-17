App.Views.UserSports = Backbone.CompositeView.extend({
  template: JST['sports/user_sports'],
  className: 'user-sports',

  initialize: function(opts) {
    this.isProfile = opts.isProfile;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    this.addSports();
    this.attachSubviews();
    return this;
  },

  addSport: function(sport) {
    var view = new App.Views.SportListing({
      model: sport,
      isProfile: this.isProfile
    });

    this.addSubview('.sport-listings', view);
  },

  addSports: function() {
    this.collection.each(this.addSport.bind(this));
  }
});
