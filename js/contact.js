app.controller('contactCtrl', function($scope, $state, angular_pro) {
    $scope.user = {};
    $scope.person = {};


    angular_pro.membersInfo()
        .then(function success(response) {
            $scope.data = response.data;
            console.log($scope.data);
        }, function error(res) {
            console.log(res);
        });



});