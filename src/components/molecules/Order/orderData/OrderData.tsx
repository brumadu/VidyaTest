import {OrderClientCardArea, OrderDataArea} from './style';
import {
  OrderState,
  orderProps,
  useOrderSelect,
} from '../../../../store/reducers/Order.store';
import {Text, View, FlatList} from 'react-native';
import ProductCard from '../../Product/productCard/ProductCard';
import {
  Product,
  useProductSelect,
} from '../../../../store/reducers/Product.store';

export default function OrderData(props: orderProps) {
  const orderData = useOrderSelect();
  const productData = useProductSelect();

  return (
    <OrderDataArea>
      <FlatList
        data={productData.products}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => <ProductCard product={item} />}
        ListHeaderComponent={<Text style={{color: 'black'}}>Pedido</Text>}
        stickyHeaderIndices={[0]}></FlatList>
      <View></View>
    </OrderDataArea>
  );
}
