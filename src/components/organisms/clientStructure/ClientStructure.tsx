import {Alert, FlatList, RefreshControl, Text} from 'react-native';
import Button from '../../atoms/button/Button';
import ClientCard from '../../molecules/clientCard/ClientCard';
import SearchBar from '../../molecules/searchBar/SearchBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {fetchClient} from '../../../services/realm/FetchClient';
import {useCallback, useEffect, useState} from 'react';
import {
  ClientState,
  useClientSelect,
} from '../../../store/reducers/Client.store';

export default function ClientStructure() {
  const clientData = useClientSelect();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={clientData.clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ClientCard client={item} />}
        ListHeaderComponent={<SearchBar></SearchBar>}></FlatList>
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </>
  );
}
