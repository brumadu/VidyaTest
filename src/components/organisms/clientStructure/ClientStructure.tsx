import {FlatList} from 'react-native';
import Button from '../../atoms/button/Button';
import ClientCard from '../../molecules/clientCard/ClientCard';
import SearchBar from '../../molecules/searchBar/SearchBar';

export default function ClientStructure({navigation}: any) {
  return (
    <>
      <SearchBar></SearchBar>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={[{item: 1, id: 1}]}
        renderItem={({item}) => <ClientCard />}
      />
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </>
  );
}
