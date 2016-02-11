/**
 * Created by marcgregoire on 10/02/2016.
 */

var myApp = angular.module('myApp', []);

myApp.controller('dataBindingCtrl', function($scope) {

    //TODO : bind pays
    $scope.pays = [
        {nom: 'France', capitale: 'Paris'},
        {nom: 'Allemagne', capitale: 'Berlin'},
        {nom: 'Italie', capitale: 'Rome'},
        {nom: 'Roumanie', capitale: 'Bucarest'}
    ];

});

myApp.directive('myGreatDirective', function() {
    return {
        scope: {
            name: '@'
        },
        template : "<h2>Hello : {{name}}</h2>"
    }
});