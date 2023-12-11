import {FormProvider, useForm} from 'react-hook-form';
import FormField from '../../../molecules/MainTab/formField/FormField';
import ImageUpload from '../../../molecules/Product/imageUpload/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {setProductData} from '../../../../store/reducers/Product.store';
import * as ImagePicker from 'react-native-image-picker';
import { Alert, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function ProductFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();

  const [image, setImage] = useState<string | null>(null); // Initialize with null

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    dispatch(setProductData(data));
    navigation.navigate('Product');
  }

  function handleGalleryClick() {
    const opts : ImagePicker.ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: true


    }
    ImagePicker.launchImageLibrary(opts, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets };
        if (response.assets && response.assets.length > 0) {
          const imageURI = response.assets[0].uri;
          if (imageURI) {
            setImage(imageURI);
          } 
      }
    }
    });
  }

  return (
    <FormProvider {...methods}>
<View>
        {image !== null && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
            <FormField fieldTitle="Nome" name="name"></FormField>
      <FormField fieldTitle="Preço" name="price"></FormField>
      <FormField
        fieldTitle="Descrição"
        name="description"
        isBig={true}></FormField>
      <ImageUpload onPress={handleGalleryClick} fieldName="Foto do Produto"></ImageUpload>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
