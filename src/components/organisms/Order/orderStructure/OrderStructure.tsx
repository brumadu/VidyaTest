import {FlatList, RefreshControl} from 'react-native';
import OrderCard from '../../../molecules/Order/orderCard/OrderCard';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import Button from '../../../atoms/button/Button';
import {SafeArea} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Order, useOrderSelect} from '../../../../store/reducers/Order.store';
import {useCallback, useEffect, useState} from 'react';
import {useClientSelect} from '../../../../store/reducers/Client.store';

export default function OrderStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const orderData = useOrderSelect();

  const [filteredOrderData, setFilteredOrderData] = useState(orderData.order);
  const [searchText, setSearchText] = useState('');

  function searchFilter(text: any) {
    if (text) {
      const newData = orderData.order.filter(item => {
        const itemData = item.products ? item.products : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredOrderData(orderData.order);
      setSearchText(text);
    } else {
      setFilteredOrderData(orderData.order);
      setSearchText(text);
    }
  }

  useEffect(() => {
    searchFilter('');
  }, [orderData]);

  function handleAddProduct() {
    navigation.navigate('OrderForm');
  }

  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={orderData.order}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <OrderCard order={item} />}
        ListHeaderComponent={
          <SearchBar text={searchText} changeText={searchFilter}></SearchBar>
        }
        stickyHeaderIndices={[0]}></FlatList>

      <Button
        buttonName="Adicionar Pedido"
        onPress={() => handleAddProduct()}></Button>
    </SafeArea>
  );
}
