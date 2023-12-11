import {FormProvider, useForm} from 'react-hook-form';
import FormField from '../../../molecules/MainTab/formField/FormField';
import ImageUpload from '../../../molecules/Product/imageUpload/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {setProductData} from '../../../../store/reducers/Product.store';

export default function ProductFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    dispatch(setProductData(data));
    navigation.navigate('Product');
  }

  return (
    <FormProvider {...methods}>
      <FormField fieldTitle="name" name="name"></FormField>
      <FormField fieldTitle="Preço" name="price"></FormField>
      <FormField
        fieldTitle="Descrição"
        name="description"
        isBig={true}></FormField>
      <ImageUpload fieldName="Foto do Produto"></ImageUpload>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
