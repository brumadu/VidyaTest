import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {Alert, FlatList, Text, View} from 'react-native';
import SelectClientField from '../../../molecules/Order/selectClientField/SelectClientField';
import {useProductSelect} from '../../../../store/reducers/Product.store';
import ProductCardQuantifier from '../../../molecules/Order/productCardQuantifier/ProductCardQuantifier';
import TotalPrice from '../../../molecules/Order/totalPrice/TotalPrice';
import {useEffect} from 'react';
import {
  setOrderData,
  useOrderSelect,
} from '../../../../store/reducers/Order.store';

export default function OrderFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();
  const orderData = useOrderSelect();
  const productData = useProductSelect();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    if (productData.products.length > 0) {
      dispatch(setOrderData(data));
      navigation.navigate('Order');
    } else {
      Alert.alert('Adicione um produto para criar um pedido');
      navigation.navigate('Order');
    }
  }

  return (
    <FormProvider {...methods}>
      <SelectClientField
        client={orderData.order[0].selectedClient}></SelectClientField>
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
