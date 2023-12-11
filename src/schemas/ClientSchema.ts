import Realm from 'realm';

export default class ClientSchema {
  static schema: Realm.ObjectSchema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      cnpj: {type: 'string', optional: true},
      cep: {type: 'string', optional: true},
      address: {type: 'string', optional: true},
      number: {type: 'string', optional: true},
      district: {type: 'string', optional: true},
      city: {type: 'string', optional: true},
      state: {type: 'string', optional: true},
    },
  };
}
