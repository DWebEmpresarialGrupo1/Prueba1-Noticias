/**
 * Created by Wizao on 23-09-2016.
 * modified by Jota on 25-09-2016.
 */
var app = angular.module('noticiaApp', []);

app.controller('mainController', function($scope){

    $scope.noticias = [] ;
    $scope.i = 0;
    //$scope.noticiaJson = '';

    $scope.transformarNoticia = function(){

        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = {created_by: '', text: '', created_at: ''};

    };

    $scope.transformarJson = function(){

        $scope.noticiaObjeto  = angular.fromJson($scope.noticiaJson);

        for( $scope.i in  $scope.noticiaObjeto){
            $scope.noticias.push($scope.noticiaObjeto[$scope.i]);
        };


    };

});