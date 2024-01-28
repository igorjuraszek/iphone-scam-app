import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CongratsController extends Controller {
  @service router;

  @action
  onRedirect() {
    this.router.transitionTo('order');
  }
}
