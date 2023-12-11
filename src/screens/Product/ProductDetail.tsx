import {useRoute} from '@react-navigation/native';
import ProductDetailStructure from '../../components/organisms/Product/productDetailStructure/ProductDetailStructure';
import {Container} from '../../styles';

export default function ProductDetail() {
  const route = useRoute();
  return (
    <Container>
      <ProductDetailStructure
        product={
          // @ts-ignore
          route.params.selectedProduct
        }
      />
    </Container>
  );
}
