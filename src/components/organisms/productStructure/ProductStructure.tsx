import {FlatList} from 'react-native';
import Button from '../../atoms/button/Button';
import SearchBar from '../../molecules/searchBar/SearchBar';
import ProductCard from '../../molecules/productCard/ProductCard';

export default function ProductStructure({navigation}: any) {
  return (
    <>
      <SearchBar />
      <FlatList
        keyExtractor={item => String(item.id)}
        data={[{item: 1, id: 1}]}
        renderItem={({item}) => <ProductCard />}
      />
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </>
  );
}
