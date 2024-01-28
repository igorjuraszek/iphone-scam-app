import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class OrderSummaryController extends Controller {
  @action
  onChangeProp() {
    this.model.prop = 'OrderSummary';
  }
}
