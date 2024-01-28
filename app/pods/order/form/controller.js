import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class OrderFormController extends Controller {
  @service router;

  @action
  onChangeProp() {
    this.model.prop = 'OrderForm';
  }

  @action
  onSave() {
    this.router.transitionTo('order.summary');
  }
}
