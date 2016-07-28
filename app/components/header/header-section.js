(function (angular) {
  angular.module('demoApp').directive('headerSection', headerSection);

  function headerSection() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/header/header.html'
    }
  }

})(angular);