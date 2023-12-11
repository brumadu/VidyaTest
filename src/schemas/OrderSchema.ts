export default class OrderSchema {
  static schema = {
    name: 'Order',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
    },
  };
}
