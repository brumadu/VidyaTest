import {FlatList} from 'react-native';
import OrderCard from '../../molecules/orderCard/OrderCard';
import SearchBar from '../../molecules/searchBar/SearchBar';
import Button from '../../atoms/button/Button';

export default function OrderStructure({navigation}: any) {
  return (
    <>
      <SearchBar></SearchBar>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={[{item: 1, id: 1}]}
        renderItem={({item}) => <OrderCard />}
      />
      <Button
        buttonName="Adicionar Pedido"
        onPress={() => navigation.navigate('')}></Button>
    </>
  );
}
