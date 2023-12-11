import {FormProvider, useForm} from 'react-hook-form';
import FormField from '../../../molecules/MainTab/formField/FormField';
import ImageUpload from '../../../molecules/Product/imageUpload/ImageUpload';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {setOrderData} from '../../../../store/reducers/Order.store';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {useProductSelect} from '../../../../store/reducers/Product.store';
import SelectClientField from '../../../molecules/Order/selectClientField/SelectClientField';
import ProductCardSelector from '../../../molecules/Order/productCardSelector/ProductCardSelector';

export default function OrderFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();

  const productData = useProductSelect();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    dispatch(setOrderData(data));
    navigation.navigate('Order');
  }

  return (
    <FormProvider {...methods}>
      <SelectClientField></SelectClientField>
      <ProductCardSelector />
      {/* <FlatList
        data={productData.products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCardSelector product={item} />}
        ListHeaderComponent={<Text>Produtos</Text>}
        stickyHeaderIndices={[0]}></FlatList> */}
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
