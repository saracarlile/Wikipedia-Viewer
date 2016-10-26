var app = angular.module('wikipediaViewer', []);

app.controller('wikiController', function($scope, $http) {
    
    $scope.searchAll = " Search Wikipedia";
    var elm = document.querySelector('input');

    $scope.search = function () {
        console.log("search");
        $scope.searchAll = null;
        elm.className = "flex-item-grow-1 ";

        $http({
            method: 'POST',
            url: 'http://en.wikipedia.org/w/api.php'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });


        function getSearchResults(data) {
            console.log(data);
        }

        $("#submit").click(function () {
            var searchTerm = $("input[name='search']").val();
            var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?";
            $.ajax({
                type: "GET",
                url: url,
                async: true,
                dataType: "jsonp",
                success: function (data) {
                    getSearchResults(data);
                }
            });
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

