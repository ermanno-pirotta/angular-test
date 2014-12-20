'use strict';

describe('service: HttpTestService', function () {
  var HttpTestService, httpBackend;

  beforeEach(module('angularTestApp'));

  beforeEach(inject(function (_HttpTestService_, $httpBackend) {
    HttpTestService = _HttpTestService_;
    httpBackend = $httpBackend;
  }));

  it('should get the data', function () {
    httpBackend.whenGET('/angulartest/data').respond({
        data: {
          	'message': 'test message'
              }                           
    });
    HttpTestService.get().then(function(data) {
      expect(data.message).toEqual('test message');
    });
    httpBackend.flush();
  });

});
