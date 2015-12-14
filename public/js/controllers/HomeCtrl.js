myApp.controller('homeController', function($scope) {
	$scope.hello = "JavaScript Games!";
	$scope.changeBanner = function(banner){
		$scope.hello = banner;
	};
});