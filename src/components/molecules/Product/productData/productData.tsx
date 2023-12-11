import {Image} from 'react-native';
import {
  ProductDataArea,
  ProductDataTitle,
  ProductDataDescription,
  ProductDataSubTitle,
  ProductTextArea,
} from './style';
import {productProps} from '../../../../store/reducers/Product.store';

export default function ProductData(props: productProps) {
  return (
    <ProductDataArea>
      {/* <Image source={{}}></Image> */}
      <ProductTextArea>
        <ProductDataTitle> {'' + props.product.name} </ProductDataTitle>
        <ProductDataSubTitle>
          {'R$: ' + props.product.price}
        </ProductDataSubTitle>
        <ProductDataDescription>
          {'' + props.product.description}
        </ProductDataDescription>
      </ProductTextArea>
    </ProductDataArea>
  );
}
