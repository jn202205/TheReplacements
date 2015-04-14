App.Views.SportsFormSidebar = Backbone.View.extend({
  template: JST['sports/form_sidebar'],
  className: 'signup-form',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      sports: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
