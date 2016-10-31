var app = angular.module('wikipediaViewer', []);

app.factory('wikiService', function ($http) {

    var wikiService = {
        get: function (titles) {
            return $http.jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + encodeURIComponent(titles.name.toLowerCase()) + "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=2&exlimit=max&callback=JSON_CALLBACK");
        }
    };
    return wikiService;
});





app.filter('stripTags', function () {
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});

app.controller('wikiController', function ($scope, wikiService) {



    var elm = document.querySelector('input');
    var result = 'helen';


    $scope.search = function () {
        //   console.log("search");

        elm.className = "flex-item-grow-1";

        wikiService.get({ name: elm.value }).then(function (data) {
            console.log(data);
            console.log(data.data.query.pages);
            $scope.wikiData = data.data.query.pages;
        });



    };

    $scope.random = function () {
        //  console.log("random");
        elm.className = "flex-item-grow-1 ";
    };

    $scope.clearSuggestedText = function () {
        elm.placeholder = "";
        elm.className = "flex-item-grow-1 ";
    };

});



//Wiki API call help stack overflow 
//http://stackoverflow.com/questions/25891076/wikipedia-api-fulltext-search-to-return-articles-with-title-snippet-and-image