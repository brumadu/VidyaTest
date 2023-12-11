import getRealm from '../realm';

export async function fetchClientForm(repo: any) {
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
    });
  } catch (error) {
    console.log('error ' + error);
  }
}
