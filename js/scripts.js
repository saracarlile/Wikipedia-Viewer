var app = angular.module('wikipediaViewer', []);

app.factory('wikiService', function ($http) {

    var wikiService = {
        get: function (country) {
            //return $http.jsonp('https://es.wikipedia.org/w/api.php?titles=' + country.name.toLowerCase() + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK');
            return $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + country.name.toLowerCase() + "&callback=JSON_CALLBACK");
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



    $scope.searchAll = " Search Wikipedia";
    var elm = document.querySelector('input');

    $scope.search = function () {
        console.log("search");
        $scope.searchAll = null;
        elm.className = "flex-item-grow-1 ";

        wikiService.get({ name: 'germany' }).then(function (data) {
            console.log(data);
            console.log(data.data.query.search)
            console.log(data.data.query.search[0]["title"]);
            console.log(data.data.query.search[0]["snippet"]);
            $scope.wikiData = data.data.query.search;
        });

    };

    $scope.random = function () {
        console.log("random");
        $scope.searchAll = null;
        elm.className = "flex-item-grow-1 ";
    };

    $scope.clearSuggestedText = function () {
        $scope.searchAll = null;
        elm.className = "flex-item-grow-1 ";
    };

    //http://jsfiddle.net/awolf2904/42y25djs/
});