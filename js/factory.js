app.factory('angular_pro', function($http, $state) {

    var data = {};
    data.membersInfo = function() {
            return $http.get('js/data.json');
        },
        data.singleMember = function() {
            return $http.get('js/trial.json');
        },

        /*data.changeState = function(xyz){
        	$state.go(xyz);  
        }*/
        data.addInfo = function(data) {
            return $http({
                method: "POST",
                url: "#/",
                data: data
            });
        };

    return data;
});