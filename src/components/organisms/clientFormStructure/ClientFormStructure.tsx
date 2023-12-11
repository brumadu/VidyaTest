import Button from '../../atoms/button/Button';
import FormField from '../../molecules/formField/FormField';
import {FieldValue, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {setClientData} from '../../../store/reducers/Client.store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert} from 'react-native';

export interface clientForm {
  name: string;
  cnpj: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
}

export default function FormStructure() {
  const dispatch = useDispatch();

  const {register, handleSubmit} = useForm<clientForm>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit({name}: clientForm) {
    Alert.alert(`data ` + name);
    dispatch(setClientData(''));
    navigation.navigate('Client');
  }

  return (
    <>
      <FormField fieldTitle="Nome" name="name" />
      <FormField fieldTitle="CNPJ" name="cnpj"></FormField>
      <FormField fieldTitle="Telefone" name="phone"></FormField>
      <FormField fieldTitle="CEP" name="cep"></FormField>
      <FormField fieldTitle="Estado" name="state"></FormField>
      <FormField fieldTitle="Cidade" name="city"></FormField>
      <FormField fieldTitle="Bairro" name="district"></FormField>
      <FormField fieldTitle="Endereço" name="address"></FormField>
      <FormField fieldTitle="Número" name="number"></FormField>
      <Button buttonName="Salvar" onPress={handleSubmit(onSubmit)}></Button>
    </>
  );
}
