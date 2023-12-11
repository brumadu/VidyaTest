import {FlatList, RefreshControl} from 'react-native';
import OrderCard from '../../../molecules/Order/orderCard/OrderCard';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import Button from '../../../atoms/button/Button';
import {SafeArea} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useOrderSelect} from '../../../../store/reducers/Order.store';
import {useCallback, useState} from 'react';

export default function OrderStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const orderData = useOrderSelect();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={orderData.orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderCard order={item} />}
        ListHeaderComponent={<SearchBar></SearchBar>}
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Adicionar Pedido"
        onPress={() => navigation.navigate('OrderForm')}></Button>
    </SafeArea>
  );
}
