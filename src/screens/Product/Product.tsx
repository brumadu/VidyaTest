import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import ProductCard from '../../components/molecules/productCard/ProductCard';
import Button from '../../components/atoms/button/Button';

export default function Product({navigation}: any) {
  return (
    <Container>
      <SearchBar></SearchBar>
      <ProductCard />
      <Button
        buttonName="Adicionar Produto"
        onPress={() => navigation.navigate('ProductForm')}></Button>
    </Container>
  );
}
