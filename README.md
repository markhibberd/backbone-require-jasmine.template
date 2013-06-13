
## apiengine-js


## design


## testing


To run all the tests just run:

    make

To just run phantom-js tests:

   make test-phantom

To just run node-js tests:

   make test-node

To run browser tests, serve up and load in browser:

   test/runner.html

To add a test, add the spec name to either `test/spec/node-specs.js` or
`test/spec/browser-specs.js` depending on where the test can be run.
