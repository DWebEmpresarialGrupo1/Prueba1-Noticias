/**
 * Created by Wizao on 23-09-2016.
 * modified by Jota on 25-09-2016.
 */
var app = angular.module('noticiaApp', []);

app.controller('mainController', function($scope){

<<<<<<< HEAD
=======
    $scope.noticias = [] ;
>>>>>>> origin/master
    $scope.i = 0;


    
    $scope.transformarJson = function(){

		$scope.noticias = [] ;
        $scope.noticiaObjeto  = angular.fromJson($scope.noticiaJson);

        for( $scope.i in  $scope.noticiaObjeto){
            $scope.noticias.push($scope.noticiaObjeto[$scope.i]);
        };


    };

});