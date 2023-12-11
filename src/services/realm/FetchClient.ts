import {useDispatch} from 'react-redux';
import getRealm from '../realm';
import {addClient} from '../../store/reducers/Client.store';

export async function fetchClient() {
  const dispatch = useDispatch();

  const realm = await getRealm();
  const data = realm.objects('ClientSchema');

  console.log(`data` + data);
  dispatch(addClient(data));
}
