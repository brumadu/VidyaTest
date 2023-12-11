import {useState} from 'react';
import {productProps} from '../../../../store/reducers/Product.store';
import Price from '../../../atoms/price/Price';
import ProductQuantifier from '../../../atoms/productQuantifier/ProductQuantifier';
import {
  ImageArea,
  ProductCardInfoArea,
  ProductCardQuantifierArea,
  ProductCardSubtitle,
  ProductCardTextArea,
  ProductCardTitle,
  ProductImage,
  ProductQuantityQuantifierArea,
} from './style';

export default function ProductCardQuantifier(props: productProps) {
  const [quantity, setQuantity] = useState(Number);

  return (
    <ProductCardQuantifierArea>
      <ImageArea>
        <ProductImage source={{uri: props.product.productPhoto}}></ProductImage>
      </ImageArea>
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
