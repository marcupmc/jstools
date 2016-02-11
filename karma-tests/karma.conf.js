/**
 * Created by marcgregoire on 11/02/2016.
 */
'use strict';

module.exports = function (config) {
    config.set({

        basePath: '',

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
        ],

        files: [
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'tests/**/*spec.js'
        ],

        reporters: ['dots']
    });
}
