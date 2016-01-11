/**
 * Created by cwklausing on 12/15/15.
 */
var app = angular.module('app', []);

app.controller('converterCtrl', ['$scope', '$http', function($scope, $http){
    //Creates empty guitar object
    $scope.guitar = {};
    //Guitar initializes with all strings = -1
    $scope.guitar.string1 = -1;
    $scope.guitar.string2 = -1;
    $scope.guitar.string3 = -1;
    $scope.guitar.string4 = -1;
    $scope.guitar.string5 = -1;
    $scope.guitar.string6 = -1;

    $scope.togglefret = function(string){
        if($scope.guitar[string] === 0){
            $scope.guitar[string] = -1;
        } else {
            $scope.guitar[string] = 0;
        }
    };

    $scope.setString = function(note, string){
        $scope.guitar[string] = note;
    };
}]);