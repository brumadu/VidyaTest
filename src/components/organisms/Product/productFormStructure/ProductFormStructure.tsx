import {FormProvider, useForm} from 'react-hook-form';
import FormField from '../../../molecules/MainTab/formField/FormField';
import ImageUpload from '../../../molecules/Product/imageUpload/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {setProductData} from '../../../../store/reducers/Product.store';
import * as ImagePicker from 'react-native-image-picker';
import {Alert, Image, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useYupValidationResolver} from '../../../../services/yup/yupValidator';
import {YupProductSchema} from '../../../../services/yup/yupProduct';
import { writeProduct } from '../../../../services/realm/product/WriteProduct';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function ProductFormStructure() {
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(YupProductSchema);
  const methods = useForm({resolver});

  const [image, setImage] = useState<string | null>(null); // Initialize with null

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    data.id = uuidv4()
    dispatch(setProductData(data));
    writeProduct(data)
    navigation.navigate('Product');
  }

  function handleGalleryClick() {
    const opts: ImagePicker.ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(opts, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets};
        if (response.assets && response.assets.length > 0) {
          const imageURI = response.assets[0].uri;
          if (imageURI) {
            setImage(imageURI);
          }
        }
      }
    });
  }

  useEffect(() => {
    methods.setValue('productPhoto', image);
  }, [image]);

  return (
    <FormProvider {...methods}>
      <View></View>
      <FormField fieldTitle="Nome" name="name"></FormField>
      <FormField fieldTitle="Preço" name="price"></FormField>
      <FormField
        fieldTitle="Descrição"
        name="description"
        isBig={true}></FormField>
      <ImageUpload
        onPress={handleGalleryClick}
        fieldName="Foto do Produto"></ImageUpload>
      {image !== null && <Text style={{color: 'black'}}>Imagem em upload</Text>}

      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
