import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import ProductCard from '../../components/molecules/productCard/ProductCard';
import Button from '../../components/atoms/button/Button';
import ProductStructure from '../../components/organisms/productStructure/ProductStructure';

export default function Product({navigation}: any) {
  return (
    <Container>
      <ProductStructure />
    </Container>
  );
}
