import {Image} from 'react-native';
import Price from '../../atoms/price/Price';
import ProductName from '../../atoms/productName/ProductName';
import {ProductArea, ProductImageArea, ProductTextArea} from './style';

export default function ProductCard({navigation}: any) {
  return (
    <ProductArea onPress={() => navigation.navigate('ProductData')}>
      <ProductImageArea>
        <Image source={[]} />
      </ProductImageArea>
      <ProductTextArea>
        <ProductName name="something" />
        <Price value={23.49} />
      </ProductTextArea>
    </ProductArea>
  );
}
