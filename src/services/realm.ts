import Realm from 'realm';
import ClientSchema from '../schemas/ClientSchema';
import OrderSchema from '../schemas/OrderSchema';
import ProductSchema from '../schemas/ProductSchema';

let realmInstance: Realm; // Declare a variable to hold the instance


export function CreateRealm() {
  if (!realmInstance) {
    realmInstance = new Realm({ schema: [ClientSchema.schema], schemaVersion: 7 });
  }
  return realmInstance;
}

export function getRealmInstance() {
  if (!realmInstance) {
    realmInstance = CreateRealm();
  }
  return realmInstance;
}


