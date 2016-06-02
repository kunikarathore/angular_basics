app.controller('createCtrl', function($scope, angular_pro) {
    $scope.add = {};

    $scope.postData = function(data) {

        angular_pro.addInfo(data)
            .then(function success(res) {
                console.log(res);
            })
    }

});