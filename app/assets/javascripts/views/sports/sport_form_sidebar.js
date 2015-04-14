App.Views.SportsFormSidebar = Backbone.View.extend({
  template: JST['sports/form_sidebar'],
  className: 'signup-form',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    'submit': 'submitForm'
  },

  render: function() {
    var content = this.template({
      sports: this.collection
    });
    this.$el.html(content);

    return this;
  },

  submitForm: function(event) {
    event.preventDefault();
    var player = new App.Models.Player({
      id: App.currUser.id,
    });
    player.set($(event.target).serializeJSON());
    player.save();
  }
});
