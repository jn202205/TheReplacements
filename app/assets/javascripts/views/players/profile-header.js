App.Views.ProfileHeader = Backbone.CompositeView.extend({
  template: JST['players/profile_header'],
  className: "row",

  events: {
    "click a.dashboard": "dashboard"
  },

  dashboard: function(event){
    event.preventDefault();
    Backbone.history.navigate('', { trigger: true });
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      player: this.model
    });
    this.$el.html(content);
    return this;
  },

});
