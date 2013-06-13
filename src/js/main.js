require.config({
  paths: {
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.2/lodash.min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text',
    handlebars: '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.3/handlebars.min',
    templates: '../templates',
    hbs: 'lib/hbs'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
  },
  hbs: {
    templateExtension: 'html',
    disableI18n: true
  }
});

require(['backbone', 'app/router', 'app/apiengine'],  function (Backbone, Router, App) {
  var app = new App();
  Router.initialize({ app: app });
  app.render();
});
