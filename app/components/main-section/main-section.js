(function (angular) {
  angular.module('demoApp').directive('mainSection', mainSection);

  function mainSection() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/main-section/main.html',
      controller: mainSectionCtrl,
      controllerAs: 'vm'
    }
  }

  mainSectionCtrl.$inject = ['IngredientsService'];

  function mainSectionCtrl(IngredientsService) {
    var vm = this;
    vm.showIngredients = showIngredients;

    vm.handleDrop = function() {
        alert('Item has been dropped');
    }

    IngredientsService.GetOptions()
      .then(function(options) {
        vm.options = options;
      });

    IngredientsService.GetAll()
      .then(function(all) {
        vm.ingredients = all;
      });  


    function showIngredients() {
      IngredientsService.GetIngredients(vm.selected_option)
        .then(function(ingredients) {
          vm.ingredients = ingredients;
        });
    }  

  }


})(angular);