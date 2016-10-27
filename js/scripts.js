var app = angular.module('wikipediaViewer', []);

app.controller('wikiController', function($scope, $http) {
    
    $scope.searchAll = " Search Wikipedia";
    var elm = document.querySelector('input');

    $scope.search = function () {
        console.log("search");
        $scope.searchAll = null;
        elm.className = "flex-item-grow-1 ";
        var searchTerm = elm.val;
        //var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?";
       // http://en.wikipedia.org//w/api.php?action=query&format=json&titles=batman&callback=?


        $http({
            method: 'GET',
            url: 'http://en.wikipedia.org//w/api.php?action=query&format=json&titles=batman&callback=?',
            async: true,
            dataType: 'jsonp',
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });




    };

     $scope.random = function () {
        console.log("random");
        $scope.searchAll = null;
        elm.className="flex-item-grow-1 ";
    };

    $scope.clearSuggestedText = function(){
          $scope.searchAll = null;
          elm.className="flex-item-grow-1 ";
    }; 
});

