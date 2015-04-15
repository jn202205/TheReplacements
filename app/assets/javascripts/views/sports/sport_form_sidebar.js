App.Views.SportsFormSidebar = Backbone.CompositeView.extend({
  template: JST['sports/form_sidebar'],
  className: 'signup-form',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
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
    player.save($(event.target).serializeJSON(), { wait: true });
    Backbone.history.navigate('', { trigger: true });
  }
});
