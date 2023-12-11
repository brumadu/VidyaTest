export default class ProductSchema {
  static schema: Realm.ObjectSchema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      description: 'string',
      price: 'float',
      image: 'string',
    },
  };
}
