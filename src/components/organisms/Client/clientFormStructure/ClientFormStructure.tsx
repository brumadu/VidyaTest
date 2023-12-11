import Button from '../../../atoms/button/Button';
import FormField from '../../../molecules/MainTab/formField/FormField';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setClientData } from '../../../../store/reducers/Client.store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import { useYupValidationResolver } from '../../../../services/yup/yupValidator';
import { YupPersonSchema } from '../../../../services/yup/yupClient';
import axios from 'axios';
import {useState } from 'react';
import { writeClient } from '../../../../services/realm/WriteClient';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export interface clientForm {
  id: string;
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
  //const methods = useForm({ resolver });
  const methods = useForm();


  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [autoFilledData, setAutoFilledData] = useState<Partial<clientForm>>({})

  function onSubmit(data: any) {
    data.id = uuidv4()
    dispatch(setClientData(data));
    writeClient(data)
    navigation.navigate('Client');
  }

  function onError(data: any) {
    Alert.alert('Erro de Validação');
  }

  async function fetchCepData(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      /* const mockedResponse = {
        data: {"bairro": "Pinheiros", "cep": "05409-002", "complemento": "de 607/608 a 1023/1024", "ddd": "11", "gia": "1004", "ibge": "3550308", "localidade": "São Paulo", "logradouro": "Rua Capote Valente", "siafi": "7107", "uf": "SP" }
      } */

      const convertedData = {
        state: response.data.uf,
        city: response.data.localidade,
        address: response.data.logradouro,
        number: response.data.complemento,
        district: response.data.bairro
      }
      setAutoFilledData(convertedData);
    } catch (error) {
      console.error('Error fetching CEP data:', error);
    }
  }

  function handleCepChange(cep: string) {
    if (cep.length === 8) {
      fetchCepData(cep);
    }
  }

  return (
    <FormProvider {...methods}>
      <FormField fieldTitle="Nome" name="name" />
      <FormField fieldTitle="CNPJ" name="cnpj" />
      <FormField fieldTitle="Telefone" name="phone" />
      <FormField fieldTitle="CEP" name="cep" autoFillValue={handleCepChange} />
      <FormField fieldTitle="Estado" name="state" value={autoFilledData.state} />
      <FormField fieldTitle="Cidade" name="city" value={autoFilledData.city}/>
      <FormField fieldTitle="Bairro" name="district" value={autoFilledData.district}/>
      <FormField fieldTitle="Endereço" name="address" value={autoFilledData.address}/>
      <FormField fieldTitle="Número" name="number" value={autoFilledData.number}/>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit, onError)}></Button>
    </FormProvider>
  );
}
