describe("Test du controlleur dataBindingCtrl",function(){

    beforeEach(module('myApp'));

    var $scope;
    beforeEach(inject(function($rootScope,$controller){
        $scope = $rootScope.$new();
        $controller('dataBindingCtrl', {
            '$scope': $scope
        });
    }));

    describe('returnToto', function() {
        it('should return toto string', function() {
            expect($scope.returnToto()).toEqual('toto');
        })
    });

    //TODO : test isTinyclues function


});