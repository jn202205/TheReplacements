App.Views.LandingView = Backbone.CompositeView.extend({
  template: JST['layouts/landing'],
  render: function() {
    content = this.template();
    this.$el.html(content);

    this.addHeader();
   // this.addNavbar();
    
    return this;
  },

  addHeader: function() {
    var header = new App.Views.Header();
    this.addSubview('.header', header);
  },

  addNavbar: function() {
    var navBar = new App.Views.UserNav();
    navBar.render();
    this.addSubview('.header', header);
  }
});
