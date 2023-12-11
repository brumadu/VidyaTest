import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {useOrderSelect} from '../../../../store/reducers/Order.store';
import {FlatList, Text} from 'react-native';
import SelectClientField from '../../../molecules/Order/selectClientField/SelectClientField';
import ProductCardSelector from '../../../molecules/Order/productCardSelector/ProductCardSelector';
import {useClientSelect} from '../../../../store/reducers/Client.store';
import {useProductSelect} from '../../../../store/reducers/Product.store';

export default function OrderFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();

  const clientData = useClientSelect();
  const orderData = useOrderSelect();
  const productData = useProductSelect();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    navigation.navigate('Order');
  }

  return (
    <FormProvider {...methods}>
      <SelectClientField
        client={
          clientData.clients[Number(orderData.selectedProduct)]
        }></SelectClientField>
      <FlatList
        data={productData.products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCardSelector product={item} />}
        ListHeaderComponent={<Text>Produtos</Text>}
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
