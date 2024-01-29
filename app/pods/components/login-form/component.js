import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  @service session;
  @service store;
  @tracked errorMessage;
  @tracked password = null;
  @tracked email = null;

  @action
  async authenticate(event) {
    event.preventDefault();
    const { email, password } = this;

    this.session.set('currentUser', null);
    this.errorMessage = '';

    try {
      await this.session.authenticate('authenticator:devise', email, password);
    } catch (error) {
      this.errorMessage = error.statusText;
    }

    if (this.session.isAuthenticated) {
      this.setCurrentUser(this.session.data.authenticated.id);
    }
  }

  @action
  onPropertyChange(key, { target: { value } }) {
    this[key] = value;
  }

  async setCurrentUser(id) {
    const user = await this.store.findRecord('user', id);
    this.session.set('currentUser', user);
  }
}
