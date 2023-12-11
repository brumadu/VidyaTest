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

export default function ProductCardSelector() {
  return (
    <ProductCardSelectorArea>
      <IconArea></IconArea>
      <ProductCardInfoArea>
        <ProductCardTextArea>
          <ProductCardTitle>Produto</ProductCardTitle>
          <ProductCardSubtitle>Codigo do produto</ProductCardSubtitle>
        </ProductCardTextArea>
        <ProductQuantitySelectorArea>
          <ProductQuantifier></ProductQuantifier>
          <Price value="100"></Price>
        </ProductQuantitySelectorArea>
      </ProductCardInfoArea>
    </ProductCardSelectorArea>
  );
}
