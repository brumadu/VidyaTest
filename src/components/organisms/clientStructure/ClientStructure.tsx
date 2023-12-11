import {FlatList, RefreshControl} from 'react-native';
import Button from '../../atoms/button/Button';
import ClientCard from '../../molecules/clientCard/ClientCard';
import SearchBar from '../../molecules/searchBar/SearchBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ClientStore, {
  ClientState,
  selectClients,
} from '../../../store/reducers/Client.store';
import {fetchClient} from '../../../services/realm/FetchClient';
import {useCallback, useEffect, useState} from 'react';
import {Scroll} from '../../../styles';
import store from '../../../store';

export default function ClientStructure() {
  const clientData = useSelector((state: {client?: ClientState}) =>
    state.client ? selectClients(state) : [],
  );
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
        data={clientData}
        renderItem={({item}) => (
          <ClientCard document={item.cnpj} name={item.name} />
        )}
        keyExtractor={item => item.id}></FlatList>
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </>
  );
}
