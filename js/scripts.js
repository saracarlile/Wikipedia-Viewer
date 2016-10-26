var app = angular.module('wikipediaViewer', []);

app.controller('wikiController', function($scope) {
    
    $scope.searchAll = "Search Wikipedia";
    
    $scope.search = function () {
        console.log("search");
        $scope.searchAll = null;

    }

     $scope.random = function () {
        console.log("random");
        $scope.searchAll = null;
    }



});