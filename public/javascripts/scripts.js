/**
 * Created by cwklausing on 12/15/15.
 */
var app = angular.module('app', []);

app.controller('converterCtrl', ['$scope', '$http', function($scope, $http){

    $scope.menuStatus = "closed";
    $scope.chordData = {};
    //Dropdown menus are initially set to
    $scope.chordData.rootSelect = "rootSelect";
    $scope.chordData.chordSelect = "chordSelect";
    //Creates empty guitar object
    $scope.guitar = {};
    //Guitar initializes with all strings = -1
    $scope.guitar.string1 = -1;
    $scope.guitar.string2 = -1;
    $scope.guitar.string3 = -1;
    $scope.guitar.string4 = -1;
    $scope.guitar.string5 = -1;
    $scope.guitar.string6 = -1;

    $scope.showChord = function() {
        $http({
            method: 'GET',
            url: '/data/chords.json'
        }).then(function(res){
            $scope.guitar.string1 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][0];
            $scope.guitar.string2 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][1];
            $scope.guitar.string3 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][2];
            $scope.guitar.string4 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][3];
            $scope.guitar.string5 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][4];
            $scope.guitar.string6 = res.data[$scope.chordData.rootSelect][$scope.chordData.chordSelect][5];
        },
        function(res){
            $scope.data = res.data || "Request failed";
            $scope.status = res.status;
        });
    };

    //Set string changes the string value, which triggers an active class
    //In both the guitar and piano svg files. See classes .active, .keyactive,
    //and .keyshadowactive in style.css
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