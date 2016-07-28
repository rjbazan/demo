(function (angular) {
  angular.module('demoApp').directive('footerSection', footerSection);

  function footerSection() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/footer/footer.html'
    }
  }

})(angular);