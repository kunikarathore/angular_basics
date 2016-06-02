app.controller('viewCtrl', function($scope, angular_pro) {
    $scope.view = {};
    angular_pro.singleMember()
        .then(function success(response) {
            $scope.view = response.data;
            //console.log($scope.data);
        }, function error(res) {
            console.log(res);
        });

});