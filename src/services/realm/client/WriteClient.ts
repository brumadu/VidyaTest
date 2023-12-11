import {Alert} from 'react-native';
import { getRealmInstance } from '../../realm';

export async function writeClient(repo: any) {
  const data = {
    id: repo.id,
    name: repo.name,
    cnpj: repo.cnpj,
    cep: repo.cep,
    address: repo.address,
    number: repo.number,
    district: repo.district,
    city: repo.city,
    state: repo.state,
  };

  const realm = getRealmInstance();
  try {
    realm.write(() => {
      realm.create('Client', data);
      Alert.alert(`data: ${JSON.stringify(data)}`);
    });
  } catch (error) {
    console.log('error ' + error);
  }
}
