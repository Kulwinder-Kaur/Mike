(function(){
  var app = angular.module("mike",['ngMaterial']);
  var AppCtrl = function($scope)
  {
    $scope.name = "WELCOME" +" " + "KULWINDER";
      var menuOptions = ['My Profile','Logout'];
    $scope.items = menuOptions;
  };
  app.controller('AppCtrl',AppCtrl);
  var QuestionCtrl = function($scope)
  {

  };
  app.controller('QuestionCtrl',QuestionCtrl);
}());