App.Views.Sidebar = Backbone.CompositeView.extend({
  template: JST['dashboard/sidebar'],
  className: 'sidebar-sports',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  addSportCard: function(sport) {
    var view = new App.Views.SportCard({
      collection: this.collection,
      model: sport
    });
    this.addSubview('.row', view);
  },

  addSportCards: function() {
    this.collection.each(this.addSportCard.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.addSportCards();
    this.attachSubviews();
    return this;
  },
});
