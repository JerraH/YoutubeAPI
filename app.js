// var searchApp = angular.module('searchApp', []);

// searchApp.controller('searchController', ['$scope', function($scope){

// 	$scope.myData = '';

// 	}

// }]);

							// jquery section

$(function(){
	$('#search').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#search_term').val();
		getRequest(searchTerm);
	});
	})

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyCR0Una8RyqxTBSsc0PWZIHUdj_xI_mI0s',
		q: searchTerm,
		maxResults:10
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data) {
		showResults(data);
});
};

	

function showResults(data){
	var html = '';
	var myData = data.items;
	$.each(myData, function(index, value){
		var titleS = value.snippet.title;
		var thumb = value.snippet.thumbnails.medium.url;
		console.log(titleS);
		console.log(thumb);
		html += '<div class="vidResult">' + '<div class="thumbnail">' + '<img class="picture" src=' + '"' + thumb + '"' + ' />'  + '</div>' + '<div class="title"><h2>' + titleS + '</h2></div>' + '</div>';
	});
	$('#searchResults').html(html);
	console.log($('#searchResults').html());
};

// The endpoint is "https://www.googleapis.com/youtube/v3/search" You will need to pass the following in the params object:
// part: 'snippet'
// key: your API key as a string
// q: put the search term here in the form of a string