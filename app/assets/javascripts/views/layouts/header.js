App.Views.Header = Backbone.View.extend({
  template: JST['layouts/header'],
  className: 'header',

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
