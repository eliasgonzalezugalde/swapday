'use strict';

describe('Controller: ProducteditCtrl', function () {

  // load the controller's module
  beforeEach(module('swapdayApp'));

  var ProducteditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProducteditCtrl = $controller('ProducteditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProducteditCtrl.awesomeThings.length).toBe(3);
  });
});
