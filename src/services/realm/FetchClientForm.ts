import {useDispatch} from 'react-redux';
import getRealm from '../realm';
import {setClientData} from '../../store/reducers/Client.store';
import {Alert} from 'react-native';

export async function fetchClientForm(repo: any) {
  const dispatch = useDispatch();

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

  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.create('ClientSchema', data);
      Alert.alert(`data: ${JSON.stringify(data)}`);
    });
  } catch (error) {
    console.log('error ' + error);
  }
}
