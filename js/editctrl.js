app.controller('editCtrl', function($scope, angular_pro) {
    $scope.person = {};
    angular_pro.singleMember()
        .then(function success(response) {
            $scope.person = response.data;
            $(":file").jfilestyle({
                input: false
            });
            //console.log($scope.data);
        }, function error(res) {
            console.log(res);
        });

    $scope.path = function(index, id) {
            var x = document.getElementById("files").value;
            document.getElementById("path").innerHTML = x;

            /*
document.getElementById("xyz").innerHTML = y;
  $scope.y.splice(index, 1);
*/
        },
        $scope.submitData = function(data) {

            angular_pro.addInfo(data)
                .then(function success(res) {
                    console.log(res);
                })
        }
});