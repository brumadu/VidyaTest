export default class ClientSchema {
  static schema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      cnpj: 'int',
      cep: 'int',
      address: 'string',
      number: 'int',
      district: 'string',
      city: 'string',
      state: 'string',
    },
  };
}
