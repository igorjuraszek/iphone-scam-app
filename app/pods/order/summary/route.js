import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class OrderSummaryRoute extends Route {
  @service router;

  beforeModel() {
    const model = this.modelFor('order');
    if (model.isNew) {
      this.router.transitionTo('congrats');
    }
  }

  model() {
    return this.modelFor('order');
  }
}
