define([
  'jquery',
  'backbone',
  'tools/pushstate',
  'app/info'
], function ($, Backbone, Pushstate, AppInfo) {
  var root = AppInfo.root;
  var api = AppInfo.api;

  return Backbone.View.extend({
    el: 'body',
    initialize: function () {
      $.ajaxPrefilter(function (options, originalOptions, jqXhr) {
        options.url = api + options.url;
      });
    },
    render: function () {
      var context = this;
      var el = this.$el;
      el.html("hello");
      $(document).delegate("a[href^='/']", 'click', Pushstate.intercept);
      Backbone.history.start({pushState: true, root: root});
    },
    events: {
    }
  });
});
