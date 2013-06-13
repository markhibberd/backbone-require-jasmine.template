/** development configuration, overriden by env/* in deployment */
define([], function () {
  var pathname = location.pathname;
  var site = pathname.indexOf('/src');
  var root = pathname.substring(0, site) + '/src/';
  return {
    root : root,
    api : 'https://s.apiengine.io/',
  };
});
