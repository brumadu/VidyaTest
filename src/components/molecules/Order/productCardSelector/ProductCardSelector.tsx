import {orderData} from '../../../../store/reducers/Order.store';
import {productProps} from '../../../../store/reducers/Product.store';
import IconArea from '../../../atoms/IconArea/IconArea';
import Price from '../../../atoms/price/Price';
import ProductQuantifier from '../../../atoms/productQuantifier/ProductQuantifier';
import {
  ProductCardInfoArea,
  ProductCardSelectorArea,
  ProductCardSubtitle,
  ProductCardTextArea,
  ProductCardTitle,
  ProductQuantitySelectorArea,
} from './style';

export default function ProductCardSelector(props: productProps) {
  return (
    <ProductCardSelectorArea>
      <IconArea></IconArea>
      <ProductCardInfoArea>
        <ProductCardTextArea>
          <ProductCardTitle>{'' + props.product.name}</ProductCardTitle>
          <ProductCardSubtitle>
            {'Cod. ' + props.product.id}
          </ProductCardSubtitle>
        </ProductCardTextArea>
        <ProductQuantitySelectorArea>
          <ProductQuantifier></ProductQuantifier>
          <Price value={props.product.price}></Price>
        </ProductQuantitySelectorArea>
      </ProductCardInfoArea>
    </ProductCardSelectorArea>
  );
}
