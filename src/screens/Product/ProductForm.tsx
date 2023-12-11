import Button from '../../components/atoms/button/Button';
import ProductFormStructure from '../../components/organisms/productFormStructure/ProductFormStructure';
import {Container} from '../../styles';

export default function ProductForm({navigation}: any) {
  return (
    <Container>
      <ProductFormStructure></ProductFormStructure>
      <Button
        buttonName="Salvar"
        onPress={() => navigation.navigate('Product')}></Button>
    </Container>
  );
}
