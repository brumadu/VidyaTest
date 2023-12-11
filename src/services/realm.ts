import Realm from 'realm';
import ClientSchema from '../schemas/ClientSchema';
import OrderSchema from '../schemas/OrderSchema';
import ProductSchema from '../schemas/ProductSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ClientSchema, OrderSchema, ProductSchema],
  });
}
