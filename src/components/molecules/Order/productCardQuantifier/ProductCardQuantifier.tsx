import {useState} from 'react';
import {productProps} from '../../../../store/reducers/Product.store';
import IconArea from '../../../atoms/IconArea/IconArea';
import Price from '../../../atoms/price/Price';
import ProductQuantifier from '../../../atoms/productQuantifier/ProductQuantifier';
import {
  ProductCardInfoArea,
  ProductCardQuantifierArea,
  ProductCardSubtitle,
  ProductCardTextArea,
  ProductCardTitle,
  ProductQuantityQuantifierArea,
} from './style';

export default function ProductCardQuantifier(props: productProps) {
  const [quantity, setQuantity] = useState(Number);

  return (
    <ProductCardQuantifierArea>
      <IconArea></IconArea>
      <ProductCardInfoArea>
        <ProductCardTextArea>
          <ProductCardTitle>{'' + props.product.name}</ProductCardTitle>
          <ProductCardSubtitle>
            {'Cod. ' + props.product.id}
          </ProductCardSubtitle>
        </ProductCardTextArea>
        <ProductQuantityQuantifierArea>
          <ProductQuantifier
            quantity={quantity}
            setQuantity={setQuantity}
            price={props.product.price}></ProductQuantifier>
          <Price value={props.product.price} fontSize="14"></Price>
        </ProductQuantityQuantifierArea>
      </ProductCardInfoArea>
    </ProductCardQuantifierArea>
  );
}
