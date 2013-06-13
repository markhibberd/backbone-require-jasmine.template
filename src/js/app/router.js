define([
  'backbone'
], function (Backbone) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      ':user': 'dashboard'
    }
  });

  var initialize = function (options) {
    var app = options.app;
    var router = new Router(options);
    // FIX this crap....
    Backbone.router = router;

    router.on('route:home', function () {
      console.log('home');
    });
    router.on('route:dashboard', function (user) {
      console.log('dashboard', user);
    });
  };

  return {
    initialize: initialize
  };
});
