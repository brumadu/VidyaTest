import {productProps} from '../../../../store/reducers/Product.store';
import ProductData from '../../../molecules/Product/productData/productData';

export default function ProductDetailStructure(props: productProps) {
  return <ProductData product={props.product} />;
}
