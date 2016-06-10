
myApp.controller('mainCtrl', ['$scope', '$rootScope', 'mainServices', 'mainFactory', function($scope, $rootScope, mainServices, mainFactory) {
	$scope.items = [];
	$rootScope.newText = '';
	$rootScope.result = false;

	mainServices.getData('data/data.json').then(function(response){
		$scope.list = response.data.data;
	});

	$scope.newItem = function(text){

        var item = {
			name: text,
			lat: Math.random() * 40.780139,
		 	lng: Math.random() * -73.955346
		}

		$scope.list.push(item);

		mainFactory.newItm(item.name, item.lat, item.lng);
	}
}]);


