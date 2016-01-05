/**
 * Created by cwklausing on 12/15/15.
 */
var app = angular.module('app', []);

app.controller('converter', ['$scope', '$http', function($scope, $http){
    $scope.test = function(){
        console.log("this click event is working");
        alert("this click event is working");
    }
}]);