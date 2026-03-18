const assert = require('assert');
const add = require('../index'); // ou le bon chemin vers ta fonction

describe('Fonction add', function () {
  it('devrait retourner 5 pour add(2, 3)', function () {
    assert.strictEqual(add(2, 3), 5);
  });

  it('devrait retourner 0 pour add(-2, 2)', function () {
    assert.strictEqual(add(-2, 2), 0);
  });
});