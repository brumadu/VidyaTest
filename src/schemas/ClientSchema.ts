import Realm from 'realm';

export default class ClientSchema {
  static schema: Realm.ObjectSchema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      cnpj: 'string',
      cep: 'string',
      address: 'string',
      number: 'string',
      district: 'string',
      city: 'string',
      state: 'string',
    },
  };
}
