export default class ProductSchema {
  static schema: Realm.ObjectSchema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      name: {type: 'string', optional: true},
      description: {type: 'string', optional: true},
      price: 'float',
      image: {type: 'string', optional: true},
    },
  };
}
