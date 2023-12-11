import {useDispatch} from 'react-redux';
import getRealm from '../realm';
import {setClientData} from '../../store/reducers/Client.store';

export async function fetchClient() {
  const dispatch = useDispatch();

  try {
    const realm = await getRealm();
    const data = realm.objects('ClientSchema');
    console.log(`data` + data);
    dispatch(setClientData(data));
  } catch (error) {
    console.error('error in fetchClients');
  }
}
