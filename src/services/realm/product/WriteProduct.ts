import {Alert} from 'react-native';
import { getRealmInstance } from '../../realm';

export async function writeProduct(repo: any) {
  const data = {
    id: repo.id,
    name: repo.name,
    price: repo.price,
    description: repo.description,
    productPhoto: repo.productPhoto
  };

  const realm = getRealmInstance();
  try {
    realm.write(() => {
      realm.create('Product', data);
    });
  } catch (error) {
    console.log('error ' + error);
  }
}
