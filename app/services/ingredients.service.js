(function () {
  angular.module('demoApp').factory('IngredientsService', IngredientsService);

  IngredientsService.$inject = ['$q', '$timeout', '$filter', 'ingredientOptions', 'ingredientsList'];

  function IngredientsService($q, $timeout, $filter, ingredientOptions, ingredientsList) {
    var service = {};

    service.GetAll = GetAll;
    service.GetOptions = GetOptions;
    service.GetIngredients = GetIngredients;

    return service;

    function GetAll() {
      var deferred = $q.defer();
      deferred.resolve(ingredientsList);
      return deferred.promise;
    }

    function GetOptions() {
      var deferred = $q.defer();
      deferred.resolve(ingredientOptions);
      return deferred.promise;
    }

    function GetIngredients(code) {
      var deferred = $q.defer();
      var filtered = $filter('filter')(ingredientsList, {code: code})
      deferred.resolve(filtered);
      return deferred.promise;
    }

  }
})();