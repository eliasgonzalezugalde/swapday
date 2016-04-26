'use strict';

describe('Controller: NewtransactionCtrl', function () {

  // load the controller's module
  beforeEach(module('swapdayApp'));

  var NewtransactionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewtransactionCtrl = $controller('NewtransactionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewtransactionCtrl.awesomeThings.length).toBe(3);
  });
});
