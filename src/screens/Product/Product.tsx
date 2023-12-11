import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import ProductCard from '../../components/molecules/productCard/ProductCard';

export default function Product() {
  return (
    <Container>
      <SearchBar></SearchBar>
      <ProductCard />
    </Container>
  );
}
