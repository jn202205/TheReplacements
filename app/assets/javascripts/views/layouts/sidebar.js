App.Views.Sidebar = Backbone.CompositeView.extend({
  template: JST['dashboard/sidebar'],
  className: 'sidebar-sports',

  events: {
    'click a.sport': 'playerSearch'
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  addSportCard: function(sport) {
    var view = new App.Views.SportCard({
      className: 'col-xs-6',
      collection: this.collection,
      model: sport
    });

    this.addSubview('.row', view);
  },

  addSportCards: function() {
    this.collection.each(this.addSportCard.bind(this));
  },

  playerSearch: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/player_search', {
      trigger: true
    });
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.addSportCards();
    this.attachSubviews();

    return this;
  },
});
