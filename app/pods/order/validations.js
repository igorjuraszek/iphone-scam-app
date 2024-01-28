import {
  validatePresence,
  validateLength,
  validateFormat,
} from 'ember-changeset-validations/validators';

export default {
  name: [validatePresence(true), validateLength({ min: 4 })],
  surname: [validatePresence(true), validateLength({ min: 4 })],
  zipCode: [validatePresence(true)],
  city: [validatePresence(true), validateLength({ min: 4 })],
  email: [validatePresence(true), validateFormat({ type: 'email' })],
  phoneNumber: [validatePresence(true)],
  street: [validatePresence(true), validateLength({ min: 3 })],
  schedule: [validatePresence(true)],
  number: [validatePresence(true)],
};
