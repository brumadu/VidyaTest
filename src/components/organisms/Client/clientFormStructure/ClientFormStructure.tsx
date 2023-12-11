import Button from '../../../atoms/button/Button';
import FormField from '../../../molecules/MainTab/formField/FormField';
import {FormProvider, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {setClientData} from '../../../../store/reducers/Client.store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import {useYupValidationResolver} from '../../../../services/yup/yupValidator';
import {YupPersonSchema} from '../../../../services/yup/yupClient';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {writeClient} from '../../../../services/realm/client/WriteClient';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {Text} from 'react-native';

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
  const methods = useForm({resolver});
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [autoFilledData, setAutoFilledData] = useState<Partial<clientForm>>({});

  function onSubmit(data: any) {
    data.id = uuidv4();
    dispatch(setClientData(data));
    writeClient(data);
    navigation.navigate('Client');
  }

  function onError(data: any) {
    Alert.alert('Erro de Validação');
  }

  async function fetchCepData(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const convertedData: Record<string, any> = {
        state: response.data.uf,
        city: response.data.localidade,
        address: response.data.logradouro,
        number: response.data.complemento,
        district: response.data.bairro,
      };
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

  const styles = {
    errorText: {
      color: 'red',
    },
  };

  useEffect(() => {
    const convertedDataKeys: Array<keyof clientForm> = [
      'state',
      'city',
      'address',
      'number',
      'district',
    ];
    convertedDataKeys.forEach(fieldName => {
      methods.setValue(fieldName, autoFilledData[fieldName]);
    });
  }, [autoFilledData]);

  return (
    <FormProvider {...methods}>
      <FormField fieldTitle="Nome" name="name" />
      {methods.formState.errors.name && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.name.message)}
        </Text>
      )}
      <FormField fieldTitle="CNPJ" name="cnpj" />
      {methods.formState.errors.cnpj && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.cnpj.message)}
        </Text>
      )}
      <FormField fieldTitle="Telefone" name="phone" />
      {methods.formState.errors.phone && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.phone.message)}
        </Text>
      )}
      <FormField fieldTitle="CEP" name="cep" autoFillValue={handleCepChange} />
      {methods.formState.errors.cep && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.cep.message)}
        </Text>
      )}
      <FormField
        fieldTitle="Estado"
        name="state"
        value={autoFilledData.state}
      />
      {methods.formState.errors.state && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.state.message)}
        </Text>
      )}
      <FormField fieldTitle="Cidade" name="city" value={autoFilledData.city} />
      {methods.formState.errors.city && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.city.message)}
        </Text>
      )}
      <FormField
        fieldTitle="Bairro"
        name="district"
        value={autoFilledData.district}
      />
      {methods.formState.errors.district && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.district.message)}
        </Text>
      )}
      <FormField
        fieldTitle="Endereço"
        name="address"
        value={autoFilledData.address}
      />
      {methods.formState.errors.address && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.address.message)}
        </Text>
      )}
      <FormField
        fieldTitle="Número"
        name="number"
        value={autoFilledData.number}
      />
      {methods.formState.errors.number && (
        <Text style={styles.errorText}>
          {String(methods.formState.errors.number.message)}
        </Text>
      )}
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit, onError)}
        isScrollable={true}></Button>
    </FormProvider>
  );
}
