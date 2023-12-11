import getRealm from '../realm';

export async function fetchClient() {
  try {
    const realm = await getRealm();
    const data = realm.objects('ClientSchema');
    console.log(`data` + data);
  } catch (error) {
    console.error('error in fetchClients');
  }
}
