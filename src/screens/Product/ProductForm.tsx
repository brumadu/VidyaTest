import {useNavigation} from '@react-navigation/native';
import Button from '../../components/atoms/button/Button';
import ProductFormStructure from '../../components/organisms/productFormStructure/ProductFormStructure';
import {Container} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ProductForm() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Container>
      <ProductFormStructure></ProductFormStructure>
      <Button
        buttonName="Salvar"
        onPress={() => navigation.navigate('Product')}></Button>
    </Container>
  );
}
