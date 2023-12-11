import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {
  setOrderData,
  useOrderSelect,
} from '../../../../store/reducers/Order.store';
import {Alert, FlatList, Text, View} from 'react-native';
import SelectClientField from '../../../molecules/Order/selectClientField/SelectClientField';
import {useProductSelect} from '../../../../store/reducers/Product.store';
import ProductCardQuantifier from '../../../molecules/Order/productCardQuantifier/ProductCardQuantifier';
import TotalPrice from '../../../molecules/Order/totalPrice/TotalPrice';
import {useEffect} from 'react';

export default function OrderFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();
  const orderData = useOrderSelect();
  const productData = useProductSelect();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    data.orderId = data.orderId + 1;
    dispatch(setOrderData(data));
    navigation.navigate('Order');
  }

  return (
    <FormProvider {...methods}>
      <SelectClientField
        client={
          orderData.order[orderData.orderId].selectedClient
        }></SelectClientField>
      <FlatList
        data={productData.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCardQuantifier product={item} />}
        ListHeaderComponent={<Text style={{color: 'black'}}>Produtos</Text>}
        stickyHeaderIndices={[0]}></FlatList>
      <TotalPrice
        totalPrice={orderData.order[orderData.orderId].totalPrice}></TotalPrice>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
