import { getRealmInstance } from "../../realm";

export function fetchProducts() {
  try {
    const realm = getRealmInstance();
    return  realm.objects('Product');
[]  } catch (error) {
    console.error('error in fetchProducts');
  }
}
