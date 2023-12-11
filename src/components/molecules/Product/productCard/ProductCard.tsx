import {Image, Text} from 'react-native';
import Price from '../../../atoms/price/Price';
import ProductName from '../../../atoms/productName/ProductName';
import {
  CardProductArea,
  ProductImage,
  ProductImageArea,
  ProductTextArea,
} from './style';
import {useNavigation} from '@react-navigation/native';
import {productProps} from '../../../../store/reducers/Product.store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface productCardProps extends productProps {}

export default function ProductCard(props: productCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <CardProductArea
      onPress={() =>
        navigation.navigate('ProductDetail', {selectedProduct: props.product})
      }>
      <ProductImageArea>
        <ProductImage source={{uri: props.product.productPhoto}} />
      </ProductImageArea>
      <ProductTextArea>
        <ProductName name={props.product.name} />
        <Price value={props.product.price} fontSize="16" />
      </ProductTextArea>
    </CardProductArea>
  );
}
