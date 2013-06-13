var requirejs = require('./lib/r');
var jasminejs = require('./lib/jasmine-1.3.1/jasmine')
var Reporter = require('./lib/console-reporter').ConsoleJasmineReporter;

requirejs.config({
  nodeRequire: require,
  paths: {
  }
});

global.define = requirejs;
global.jasmine = jasminejs.jasmine;
global.describe = jasminejs.describe;
global.it = jasminejs.it;
global.beforeEach = jasminejs.beforeEach;
global.expect = jasminejs.expect;

requirejs(['spec/node-specs'], function() {
  var env = jasmine.getEnv();
  env.addReporter(new Reporter());
  env.execute();
});
