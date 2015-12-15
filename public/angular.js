/**
 * Created by cwklausing on 12/15/15.
 */
var app = angular.module('app', []);
app.controller("myController", ['$scope', '$http', function($scope, $http){
    $scope.strings = [];
}])