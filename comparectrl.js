app.controller('compareCtrl', function ($scope, angular_pro){
	$scope.info = {
		"user": "xyz",
		"password": "123456"
	};
/*  var test = "changeState";*/
    $scope.check = function(){
    	if($scope.user.pass1 === $scope.info.user && $scope.user.pass === $scope.info.password){
    	angular_pro.changeState('contact');
     	/*alert("ldoskvlks");*/
     }
    	
    	else {
    		console.log("what");
    	}
    }
});
