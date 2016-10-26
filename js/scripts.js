var app = angular.module('wikipediaViewer', []);

app.controller('wikiController', function($scope) {
    
    $scope.searchAll = " Search Wikipedia";
    var elm = document.querySelector('input');
    
    $scope.search = function () {
        console.log("search");
        $scope.searchAll = null;
        elm.className="flex-item-grow-1 ";     
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