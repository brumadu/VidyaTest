import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import OrderCard from '../../components/molecules/orderCard/OrderCard';

export default function Order() {
  return (
    <Container>
      <SearchBar></SearchBar>
      <OrderCard></OrderCard>
    </Container>
  );
}
