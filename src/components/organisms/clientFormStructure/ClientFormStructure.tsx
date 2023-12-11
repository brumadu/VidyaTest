import Button from '../../atoms/button/Button';
import FormField from '../../molecules/formField/FormField';
import {Form, useForm} from 'react-hook-form';
import {fetchClientForm} from '../../../services/realm/FetchClientForm';
import {useDispatch} from 'react-redux';
import {addClient} from '../../../store/reducers/Client.store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import getRealm from '../../../services/realm';
import {fetchClient} from '../../../services/realm/FetchClient';

export interface clientForm {
  name: string;
  cnpj: string;
  cep: string;
  phone: string;
  address: string;
  number: string;
  city: string;
  district: string;
  state: string;
}

export default function FormStructure() {
  const {control, handleSubmit} = useForm<clientForm>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <FormField name="name" control={control} />
      <FormField name="cnpj" control={control}></FormField>
      <FormField name="phone" control={control}></FormField>
      <FormField name="cep" control={control}></FormField>
      <FormField name="state" control={control}></FormField>
      <FormField name="city" control={control}></FormField>
      <FormField name="district" control={control}></FormField>
      <FormField name="address" control={control}></FormField>
      <FormField name="number" control={control}></FormField>
      <Button
        buttonName="Salvar"
        onPress={() => {
          handleSubmit(async data => await fetchClientForm(data));
          fetchClient();
          navigation.navigate('Client');
        }}></Button>
    </>
  );
}
