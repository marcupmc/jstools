/**
 * Created by marcgregoire on 10/02/2016.
 */
myApp.service('timeService', function() {

    // fonction accessible
    this.getCurrentTime = function() {
        return new Date();
    }

});