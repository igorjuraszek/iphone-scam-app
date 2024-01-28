import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminOrderShowRoute extends Route {
  @service store;
  @service router;

  async model({ id }) {
    try {
      const model = await this.store.findRecord('order', id);
      return model;
    } catch (error) {
      this.router.transitionTo('admin.orders');
    }
  }
}
