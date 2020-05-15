(function() {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  function LunchCheckController($scope)
  {
    $scope.lunchmenu="";
    $scope.message="";
    $scope.IsToMuch=function() {
      if($scope.lunchmenu.length==0)
      {
        $scope.message="Please enter data first";
      }
      else if (IsItToMuch($scope.lunchmenu))
      {
        $scope.message="Too much!";
      }
      else {
      {
          $scope.message="Enjoy!";
      }
      }
    };
  }
  function IsItToMuch(s)
  {
    return s.split(",").length> 3;
  }
}());
