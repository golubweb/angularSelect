myApp.factory('mainFactory', ['$q', function($q) {
	return {
		removeElem: function(elem){
			$('.searchResult').remove();
		},

		newItm: function(name, lat, lng) {
			$('input').val("");
			$('.addToList').hide();
			$('.filterText').html('<span>Name: ' + name + '</span>Lat: ' + lat + '<br /> Lng: ' + lng);
		},

		filterM: function(text) {
			$('.filterText').text(text);
		}
	}
}]);