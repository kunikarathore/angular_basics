var app = angular.module('angularProject', ['ui.router']);
// app config
/* app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
	 $urlRouterProvider.otherwise("/");

 $stateProvider
      .state('home', {
      	url: '/',
      	templateUrl: 'log_in.html',
      	controller: 'homeCtrl'
      })

      .state('contact', {
      	url: '/contact',
      	templateUrl: 'contact.html',
      	controller: 'contactCtrl'
      })

      .state('edit', {
        url: '/edit',
        templateUrl: 'edit_form.html',
        controller: 'editCtrl'
      })
}]); 


app.controller('homeCtrl', function ($scope, angular_pro){
	$scope.user = {};
  -----------$scope.clicked = function(){
angular_pro.changeState();                       // not to be executed
  }--------------------
     
});*/

/*
app.controller('contactCtrl', function($scope, angular_pro){
  $scope.person ={};
	angular_pro.membersInfo()
	.then(function success(response){
		$scope.data = response.data;
		console.log($scope.data);
	}, function error(response){
		console.log(response);
	});

 $scope.edit_profile = function(id){
    angular_pro.changeState('edit');
     $scope.person = $scope.data[id];
  }


});

app.factory('angular_pro', function($http, $state){
	var data = {};
	data.membersInfo = function() {
  return $http.get('js/data.json');
	},
	data.changeState = function(xyz){
		$state.go(xyz);  
	}
return data;
});

app.controller('compareCtrl', function ($scope, angular_pro){
	$scope.info = {
		"user": "xyz",
		"password": "123456"
	};
//  var test = "changeState";
    $scope.check = function(){
    	if($scope.user.pass1 === $scope.info.user && $scope.user.pass === $scope.info.password){
    	angular_pro.changeState('contact');
     	//alert("ldoskvlks");
     }
    	
    	else {
    		console.log("what");
    	}
    }
});

app.controller('editCtrl', function ($scope){

});
*/
