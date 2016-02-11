/**
 * Created by marcgregoire on 10/02/2016.
 */

var myApp = angular.module('myApp', []);

myApp.controller('dataBindingCtrl', function($scope) {

    $scope.returnToto = function(){
        return "toto";
    };

    $scope.isTinyclues = function(text) {
        return 'tinyclues' === text;
    }

});

