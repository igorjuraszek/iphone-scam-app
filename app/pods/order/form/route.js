import Route from '@ember/routing/route';

export default class OrderFormRoute extends Route {
  model() {
    return this.modelFor('order');
  }
}
