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
    vm.removeItem = removeItem;
    vm.saveRecipe = saveRecipe;
    vm.recipeItems = [];

    IngredientsService.GetAll()
      .then(function(all) {
        vm.ingredients = all;
      });  

    
    function removeItem(index, item, list) {
      if (list === 'ingredients') {
        index = vm.ingredients.indexOf(item);
        if (index != -1) {
          vm.ingredients.splice(index, 1);
        }
        vm.recipeItems.push(item);
      } else {
        vm.query = '';
        vm.recipeItems.splice(index, 1);
        vm.ingredients.push(item);
      }
    }
    
    function saveRecipe() {
      IngredientsService.saveRecipe(vm.recipeItems)
       .then(function(response) {
         alert(response.success);
       });
    }

  }


})(angular);