import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import ClientCard from '../../components/molecules/clientCard/ClientCard';

export default function Client({}) {
  return (
    <Container>
      <SearchBar></SearchBar>
      <ClientCard />
    </Container>
  );
}
