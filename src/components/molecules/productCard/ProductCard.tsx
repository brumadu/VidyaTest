import {Image} from 'react-native';
import Price from '../../atoms/price/Price';
import ProductName from '../../atoms/productName/ProductName';
import {ProductArea, ProductImageArea, ProductTextArea} from './style';
import {useNavigation} from '@react-navigation/native';
import {Product, productProps} from '../../../store/reducers/Product.store';

export default function ProductCard(props: productProps) {
  const navigation = useNavigation();
  return (
    <ProductArea
    // onPress={() =>
    //   navigation.navigate('ProductDetail', {selectedProduct: props.product})
    // }
    >
      <ProductImageArea>
        <Image source={[]} />
      </ProductImageArea>
      <ProductTextArea>
        <ProductName name={props.product.name} />
        <Price value={props.product.price} />
      </ProductTextArea>
    </ProductArea>
  );
}
