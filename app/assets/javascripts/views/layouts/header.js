App.Views.Header = Backbone.CompositeView.extend({
  template: JST['dashboard/header'],
  className: "row",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  },

});
