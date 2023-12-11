import {Image} from 'react-native';
import Price from '../../atoms/price/Price';
import ProductName from '../../atoms/productName/ProductName';
import {CardProductArea, ProductImageArea, ProductTextArea} from './style';
import {useNavigation} from '@react-navigation/native';
import {productProps} from '../../../store/reducers/Product.store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ProductCard(props: productProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <CardProductArea
      onPress={() =>
        navigation.navigate('ProductDetail', {selectedProduct: props.product})
      }>
      <ProductImageArea>
        <Image source={[]} />
      </ProductImageArea>
      <ProductTextArea>
        <ProductName name={props.product.name} />
        <Price value={props.product.price} />
      </ProductTextArea>
    </CardProductArea>
  );
}
