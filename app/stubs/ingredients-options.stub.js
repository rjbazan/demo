(function(angular) {
  'use strict';

  angular
    .module('demoApp')
    .value('ingredientOptions', [
      {
        name: 'Grain Malts',
        code: 'GRAIN'
      },
      {
        name: 'Hops',
        code: 'HOPS'
      },
      {
        name: 'Beer Yeast',
        code: 'YEAST'
      },
      {
        name: 'Malt Extracts',
        code: 'EXTRACT'
      },
    ]);

})(angular);