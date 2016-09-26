/**
 * Created by Wizao on 23-09-2016.
 * modified by Jota on 25-09-2016.
 */
var app = angular.module('noticiaApp', []);

app.controller('mainController', function($scope){

    $scope.noticias = [] ;
<<<<<<< HEAD
    $scope.i = 0;
=======
    //$scope.noticiaJson = '';
>>>>>>> origin/master



    $scope.transformarJson = function(){

        $scope.noticiaObjeto  = angular.fromJson($scope.noticiaJson);
<<<<<<< HEAD

        for( $scope.i in  $scope.noticiaObjeto){
            $scope.noticias.push($scope.noticiaObjeto[$scope.i]);
        };


=======
        $scope.noticias.push($scope.noticiaObjeto);
		//$scope.noticiaJson = '';
>>>>>>> origin/master
    };

});