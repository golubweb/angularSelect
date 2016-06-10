myApp.directive('input', ['$compile', '$rootScope', '$templateRequest', 'mainFactory', function($compile, $rootScope, $templateRequest, mainFactory){
	return {
		restrict: 'E',
		scope: true,
		controller: function($scope) {
			this.getItem = function(elem, text, items) {
				angular.forEach($scope.list, function(item, key) 
				{
					if( item.name.toLowerCase().indexOf(text.toLowerCase()) !=-1 ) {
						items.push(item);
						$rootScope.result = true;
						$('.addToList').hide();
					} else {
						if(Object.keys(items).length < 1) {
							$rootScope.newText = text;
							$('.addToList').show();
						}
					}
				});
				
				$scope.getTpl(elem);
			}
			
			$scope.getTpl = function(elem){
				mainFactory.removeElem($('.searchResult'));

				$templateRequest('templates/search_List.html').then(function(html){
					var template = angular.element(html);

					angular.element(elem).after($compile(template)($scope));
				});
			}
		},
		link: function(scope , element, attr, controller){
			var searchText = '';

			element.bind("keyup", function (e) {
				scope.items = [];
				searchText = e.target.value;
				var keyCode = e.which || e.keyCode;

				if(searchText.length > 1){
					controller.getItem(element, searchText, scope.items);

				} else {
					if(e.keyCode === 8 || searchText == "" || searchText == null) {
						controller.getItem(element, searchText, scope.items);
					}

					$rootScope.newText = '';
					$rootScope.result = false;
				}

				mainFactory.filterM(searchText);
			});
		}
	}
}]);

