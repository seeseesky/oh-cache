var assert = require('assert');
var oc = require('../cache');

describe('Testing cache', function() {
  describe('Add cache entry and check if it exists', function() {
    it('Add cache entry', function() {
      let key = 'test-key';
      let data = { foo: 'bar' }
      let ttl = 5000;
      oc.updateCache(key, data, ttl);
      let cache = oc.getCache(key);
      assert.deepStrictEqual(cache, data);
    });
  });

});
