import {Container} from '../../styles';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import ClientCard from '../../components/molecules/clientCard/ClientCard';
import Button from '../../components/atoms/button/Button';

export default function Client({navigation}: any) {
  return (
    <Container>
      <SearchBar></SearchBar>
      <ClientCard />
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </Container>
  );
}
