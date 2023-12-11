import {Alert, FlatList} from 'react-native';
import Button from '../../../atoms/button/Button';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import {useEffect, useState} from 'react';
import {SafeArea} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  setOrderSelectedClient,
  useOrderSelect,
} from '../../../../store/reducers/Order.store';
import SelectedClientCard from '../../../molecules/Order/SelectedClientCard/SelectedClientCard';
import {Client, useClientSelect} from '../../../../store/reducers/Client.store';
import {useDispatch} from 'react-redux';

export default function OrderSelectStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const clientData = useClientSelect();
  const dispatch = useDispatch();

  const [selectedClient, setSelectedClient] = useState<Client>();

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

  function handleSetSelectedProduct() {
    dispatch(setOrderSelectedClient(selectedClient));
    navigation.navigate('OrderForm');
  }

  return (
    <SafeArea>
      <FlatList
        data={filteredClientData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SelectedClientCard
            client={item}
            isSelected={selectedClient?.id == item.id}
            setSelectedClient={setSelectedClient}
          />
        )}
        ListHeaderComponent={
          <SearchBar text={searchText} changeText={searchFilter}></SearchBar>
        }
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Salvar"
        onPress={() => handleSetSelectedProduct()}></Button>
    </SafeArea>
  );
}
