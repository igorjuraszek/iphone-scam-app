import { module, test } from 'qunit';
import { setupTest } from 'iphone-scam-app/tests/helpers';

module('Unit | Route | admin/order/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin/order/show');
    assert.ok(route);
  });
});
