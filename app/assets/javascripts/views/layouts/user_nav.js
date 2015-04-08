App.Views.UserNav = Backbone.View.extend({
  template: JST['layouts/user_nav'],
  attributes: {
    'class': 'btn-group',
    'role': 'group',
    'aria-label': '...'
  },

  render: function() {
    this.el$.html(this.template());
    return this;
  }
});

