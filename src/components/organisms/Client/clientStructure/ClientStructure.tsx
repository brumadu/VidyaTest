import {Alert, FlatList, RefreshControl, Text} from 'react-native';
import Button from '../../../atoms/button/Button';
import ClientCard from '../../../molecules/Client/clientCard/ClientCard';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {fetchClient} from '../../../../services/realm/client/FetchClient';
import {useCallback, useEffect, useState} from 'react';
import {Client, useClientSelect} from '../../../../store/reducers/Client.store';
import {SafeArea} from '../../../../styles';

export default function ClientStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    searchFilter('');
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const clientData = useClientSelect();
  const [filteredClientData, setFilteredClientData] = useState<Client[]>(
    clientData.clients,
  );
  const [searchText, setSearchText] = useState('');

  function searchFilter(text: any) {
    if (text) {
      const newData = clientData.clients.filter(item => {
        const itemData = item.name ? item.name : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredClientData(newData);
      setSearchText(text);
    } else {
      setFilteredClientData(clientData.clients);
      setSearchText(text);
    }
  }

  useEffect(() => {
    searchFilter('');
  }, [clientData]);

  function handleAddProduct() {
    navigation.navigate('ClientForm');
  }

  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={filteredClientData}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <ClientCard client={item} />}
        ListHeaderComponent={
          <SearchBar text={searchText} changeText={searchFilter}></SearchBar>
        }
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => handleAddProduct()}></Button>
    </SafeArea>
  );
}
