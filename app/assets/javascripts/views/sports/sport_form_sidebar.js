App.Views.SportsFormSidebar = Backbone.CompositeView.extend({
  template: JST['sports/form_sidebar'],
  className: 'signup-form',

  events: {
    'submit': 'submitForm',
    'click label.sport': 'selectSport'
  },

  selectSport: function(event) {
    var selectedSport = $(event.currentTarget);
    if ($(event.target).is(':checked')) {
      selectedSport.children('img').addClass('selected');
    } else {
      selectedSport.children('img').removeClass('selected');
    }
  },

  preSelectSports: function() {
    this.$('input[type=checkbox]').each(function(idx, sport) {
      if ($(sport).is(':checked')) {
        $(sport).siblings('img').addClass('selected');
      }
    });
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      sports: this.collection
    });
    this.$el.html(content);
    this.preSelectSports();
    return this;
  },

  submitForm: function(event) {
    event.preventDefault();
    var player = new App.Models.Player({
      id: App.currUser.id,
    });
    player.save($(event.target).serializeJSON(), {
      wait: true
    });
    Backbone.history.navigate('', {
      trigger: true
    });
  }
});
