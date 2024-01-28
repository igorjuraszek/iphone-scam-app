import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import orderValidator from '../../../order/validations';

const CONST_FIELDS_SHEMA = {
  order: {
    name: { path: 'text', propertyName: 'name', fieldName: 'Name' },
    surname: { path: 'text', propertyName: 'surname', fieldName: 'Surname' },
    zipCode: { path: 'text', propertyName: 'zipCode', fieldName: 'Zip Code' },
    city: { path: 'text', propertyName: 'city', fieldName: 'City' },
    country: { path: 'text', propertyName: 'country', fieldName: 'Country' },
    email: { path: 'text', propertyName: 'email', fieldName: 'Email' },
    phoneNumber: {
      path: 'text',
      propertyName: 'phoneNumber',
      fieldName: 'Phone number',
    },
    street: { path: 'text', propertyName: 'street', fieldName: 'Street' },
    number: { path: 'number', propertyName: 'number', fieldName: 'Number' },
    schedule: { path: 'date', propertyName: 'schedule', fieldName: 'Schedule' },
  },
};

export default class SharedFormComponent extends Component {
  constructor() {
    super(...arguments);
    this.changeset = Changeset(
      this.args.model,
      lookupValidator(orderValidator),
      orderValidator
    );
  }

  willDestroy() {
    const { model } = this.args;

    if (model.isNew) {
      model.destroyRecord();
    }
    super.willDestroy(...arguments);
  }

  get schemaFields() {
    const { modelType } = this.args;
    const schema = CONST_FIELDS_SHEMA[modelType];

    let preparedSchema = [];

    Object.keys(schema).forEach((key) => {
      let item = schema[key];
      preparedSchema.push({
        path: item.path,
        propertyName: item.propertyName,
        fieldName: item.fieldName,
      });
    });
    return preparedSchema;
  }

  @action
  onPropertyChange(key, path, { target: { value } }) {
    if (path === 'date') {
      this.changeset.set(key, new Date(value));
    } else {
      this.changeset.set(key, value);
    }
  }

  @action
  async onSave(event) {
    event.preventDefault();
    const {
      changeset,
      args: { onSave },
    } = this;

    changeset.validate();

    if (!changeset.errors.length) {
      console.log('onSave');
      await changeset.save();
      if (!changeset.isDirty) {
        onSave?.();
      }
    }
    console.log(changeset);
  }
}
