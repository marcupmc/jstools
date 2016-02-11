/**
 * Created by marcgregoire on 10/02/2016.
 */

var myApp = angular.module('myApp', []);

myApp.controller('dataBindingCtrl', function($scope, timeService) {

    $scope.getTime = function() {
        $scope.time = timeService.getCurrentTime();
    };

});


/**
 * Created by marcgregoire on 10/02/2016.
 */
myApp.service('timeService', function() {

    // fonction accessible
    this.getCurrentTime = function() {
        return new Date();
    }

});