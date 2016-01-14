/**
 * Created by cwklausing on 12/15/15.
 */
var app = angular.module('app', []);

app.controller('converterCtrl', ['$scope', '$http', function($scope, $http){
    //Creates empty guitar object
    $scope.menuStatus = "closed";
    $scope.chordData = [];
    $scope.chordData.rootSelect = null;
    $scope.chordData.chordSelect = null;
    $scope.guitar = {};
    //Guitar initializes with all strings = -1
    $scope.guitar.string1 = -1;
    $scope.guitar.string2 = -1;
    $scope.guitar.string3 = -1;
    $scope.guitar.string4 = -1;
    $scope.guitar.string5 = -1;
    $scope.guitar.string6 = -1;

    //Set string changes the string value, which triggers an active class
    //In both the guitar and piano svg files. See classes .active, .keyactive,
    //and .keyshadowactive in style.css
    $scope.showChord = function() {
        $http({
            method: 'GET',
            url: '/data/chords.json'
        }).then(function(res){
            console.log(res.data);
        }).catch(function(err){
            console.log(err);
        });
    };

    $scope.setString = function(note, string){
        if($scope.guitar[string] === note) {
            $scope.guitar[string] = -1;
        } else {
            $scope.guitar[string] = note;
        }
    };

    $scope.menuToggle = function() {
        if($scope.menuStatus === "closed"){
            $scope.menuStatus = "open";
        } else {
            $scope.menuStatus = "closed";
        }
    };
}]);