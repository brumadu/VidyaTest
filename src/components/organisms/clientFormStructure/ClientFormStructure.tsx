import {useState} from 'react';
import Button from '../../atoms/button/Button';
import FormField from '../../molecules/formField/FormField';
import getRealm from '../../../services/realm';
import ClientSchema from '../../../schemas/ClientSchema';

export default function FormStructure({navigation}: any) {
  const [clientForm, setClientForm] = useState('');

  async function saveRepository(repo: any) {
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

    realm.write(() => {
      realm.create('ClientSchema', data);
    });
  }

  function handlePress() {
    setClientForm('');
    navigation.navigate('Client');
  }

  return (
    <>
      <FormField name="Nome"></FormField>
      <FormField name="CNPJ"></FormField>
      <FormField name="Telefone"></FormField>
      <FormField name="CEP"></FormField>
      <FormField name="Estado"></FormField>
      <FormField name="Cidade"></FormField>
      <FormField name="Bairro"></FormField>
      <FormField name="Endereço"></FormField>
      <FormField name="Numero"></FormField>
      <Button buttonName="Salvar" onPress={() => handlePress()}></Button>
    </>
  );
}
