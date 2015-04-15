App.Views.PlayerSearch = Backbone.CompositeView.extend({
  template: JST['players/search'],
  className: 'static-homepage',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderHeader();
    return this;
  },

  renderHeader: function() {
    var view = new App.Views.Header({
      model: this.model
    });

    this.addSubview('.dashboard-head', view);
  }
});
