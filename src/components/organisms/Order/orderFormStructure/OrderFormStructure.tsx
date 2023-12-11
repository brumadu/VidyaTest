import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Button from '../../../atoms/button/Button';
import {useOrderSelect} from '../../../../store/reducers/Order.store';
import {FlatList, Text, View} from 'react-native';
import SelectClientField from '../../../molecules/Order/selectClientField/SelectClientField';
import {useProductSelect} from '../../../../store/reducers/Product.store';
import ProductCardQuantifier from '../../../molecules/Order/productCardQuantifier/ProductCardQuantifier';
import TotalPrice from '../../../molecules/Order/totalPrice/TotalPrice';

export default function OrderFormStructure() {
  const dispatch = useDispatch();
  const methods = useForm();
  const orderData = useOrderSelect();
  const productData = useProductSelect();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onSubmit(data: any) {
    navigation.navigate('Order');
  }

  return (
    <FormProvider {...methods}>
      <SelectClientField client={orderData.selectedClient}></SelectClientField>
      <FlatList
        data={productData.products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCardQuantifier product={item} />}
        ListHeaderComponent={<Text style={{color: 'black'}}>Produtos</Text>}
        stickyHeaderIndices={[0]}></FlatList>
      <TotalPrice totalPrice="100"></TotalPrice>
      <Button
        buttonName="Salvar"
        onPress={methods.handleSubmit(onSubmit)}></Button>
    </FormProvider>
  );
}
