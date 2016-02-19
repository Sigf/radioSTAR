var myApp = angular.module('myApp', []);

var dev_prefix = "http://localhost:3000";
var prod_prefix = "/radiostar";
var current_prefix = dev_prefix;

myApp.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name=csrf-token]').attr('content');
  }
]);

myApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http){

  $scope.getPlaylists = function(show_id){
    $http.get(current_prefix + '/users/' + current_user + '/shows/' + show_id + '/playlists.json').success(function(data){
      console.log(data);
		});
  }

  $scope.getShows = function(){
    $http.get(current_prefix + '/users/' + current_user  + '/shows.json').success(function(data){
      console.log(data);
    })
  }

  $scope.getCharts = function(){
    $http.get(current_prefix + '/charts.json').success(function(data){
      console.log(data);
    })
  }

  $scope.getChartsSongs = function(chart_id){
    $http.get(current_prefix + '/charts/' + chart_id + '/songs.json').success(function(data){
      console.log(data);
    })
  }

  $scope.getPlaylistsSongs = function(show_id, playlist_id){
    $http.get(current_prefix + '/users/' + current_user + '/shows/' + show_id + '/playlists/' + playlist_id + '/songs.json').success(function(data){
      console.log(data);
    })
  }

  $scope.testConnection = function(){
    console.log("attemping to log with username: %s and password: %s", email, password);
    $http.post(current_prefix + '/profile/radioactivity.json', {'email': email, 'password': password}).success(function(data){
      console.log(data);
    })
  }

  $scope.init = function(){
    console.log("starting.");
    //$scope.getShows();
    $scope.testConnection();
  }

    $scope.init();

}]);
