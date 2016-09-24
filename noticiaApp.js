/**
 * Created by Wizao on 23-09-2016.
 */
var app = angular.module('noticiaApp', []);

app.controller('mainController', function($scope){

    $scope.noticias = [] ;
    $scope.noticiaJson = '';

    $scope.transformarNoticia = function(){

        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = {created_by: '', text: '', created_at: ''};

    };

    $scope.transformarJson = function(){

        $scope.noticiaObjeto  = angular.fromJson($scope.noticiaJson);
        $scope.noticias.push($scope.noticiaObjeto);
        $scope.noticiaJson = '';


    };
});