import EmberRouter from '@ember/routing/router';
import config from 'iphone-scam-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('order', function () {
    this.route('form', { path: '/' });
    this.route('summary');
  });
  this.route('admin', function () {
    this.route('orders', { path: '/' });

    this.route('order', function () {
      this.route('show', { path: ':id' });
    });
  });
  this.route('congrats', { path: '/' });
});
