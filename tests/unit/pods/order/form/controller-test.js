import { module, test } from 'qunit';
import { setupTest } from 'iphone-scam-app/tests/helpers';

module('Unit | Controller | order/form', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:order/form');
    assert.ok(controller);
  });
});
