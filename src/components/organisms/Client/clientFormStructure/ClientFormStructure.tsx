import Button from '../../../atoms/button/Button';
import FormField from '../../../molecules/MainTab/formField/FormField';
import {FormProvider, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {setClientData} from '../../../../store/reducers/Client.store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import {useYupValidationResolver} from '../../../../services/yup/yupValidator';
import ClientSchema from '../../../../schemas/ClientSchema';
import {YupPersonSchema} from '../../../../services/yup/yupClient';

export interface clientForm {
  id: number;
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

  const resolver = useYupValidationResolver(YupPersonSchema);
  const methods = useForm({resolver});

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    dispatch(setClientData(data));
    navigation.navigate('Client');
  }

  function onError(data: any) {
    Alert.alert('Erro de Validação');
  }

  return (
    <FormProvider {...methods}>
      <FormField fieldTitle="Nome" name="name" />
      <FormField fieldTitle="CNPJ" name="cnpj" />
      <FormField fieldTitle="Telefone" name="phone" />
      <FormField fieldTitle="CEP" name="cep" />
      <FormField fieldTitle="Estado" name="state" />
      <FormField fieldTitle="Cidade" name="city" />
      <FormField fieldTitle="Bairro" name="district" />
      <FormField fieldTitle="Endereço" name="address" />
      <FormField fieldTitle="Número" name="number" />
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit, onError)}></Button>
    </FormProvider>
  );
}
