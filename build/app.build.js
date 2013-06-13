({
    optimize: 'uglify',
    appDir: '../src',
    baseUrl: 'js',
    dir: '../gen/dist',
    modules: [
        {
            name: 'main',
            exclude: [
              'jquery',
              'underscore',
              'backbone',
              'handlebars',
              'text'
            ]
        }

    ],
    paths: {
      jquery: 'empty:',
      backbone: 'empty:',
      handlebars: '../../build/handlebars',
      underscore: '../../build/lodash',
      text: '../../build/text'
    },
    mainConfigFile: '../src/js/main.js',
    pragmasOnSave: {
      excludeHbsParser : true,
      excludeHbs: true,
      excludeAfterBuild: true
    }
})
