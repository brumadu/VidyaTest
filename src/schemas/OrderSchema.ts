export default class OrderSchema {
  static schema: Realm.ObjectSchema = {
    name: 'Order',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
    },
  };
}
