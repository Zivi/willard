var wizardApp = angular.module('wizardApp', []);

wizardApp.controller('TipController', function TipController($scope) {
  $scope.input = {
    checkValue: 100,
    customTipValue: 0,
    tipAmounts: [15, 20, 25]
  };
  $scope.resetTotal = function(){
    this.input.checkValue = 0;
  };
  $scope.resetTip = function(){
    this.input.customTipValue = 0;
  }
});
