import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('string') name;
  @attr('string') surname;
  @attr('string') zipCode;
  @attr('string') city;
  @attr('string') email;
  @attr('string') phoneNumber;
  @attr('string') street;
  @attr('string') country;
  @attr('date') schedule;
  @attr('number') number;
}
