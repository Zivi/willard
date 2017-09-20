var wizardApp = angular.module('wizardApp', []);

wizardApp.controller('TipController', function TipController($scope) {
  $scope.input = {
    value: 100,
    default: 0,
    tipAmounts: [15, 20, 25]
  };
});
