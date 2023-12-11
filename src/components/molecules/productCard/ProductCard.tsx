import {Image} from 'react-native';
import Price from '../../atoms/price/Price';
import ProductName from '../../atoms/productName/ProductName';
import {ProductArea, ProductImageArea, ProductTextArea} from './style';

export default function ProductCard() {
  return (
    <ProductArea>
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
