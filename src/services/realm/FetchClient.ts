import { getRealmInstance } from "../realm";

export function fetchClients() {
  try {
    const realm = getRealmInstance();
    return  realm.objects('Client');
[]  } catch (error) {
    console.error('error in fetchClients');
  }
}
