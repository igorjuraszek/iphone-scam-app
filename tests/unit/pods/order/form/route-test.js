import { module, test } from 'qunit';
import { setupTest } from 'iphone-scam-app/tests/helpers';

module('Unit | Route | order/form', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:order/form');
    assert.ok(route);
  });
});
