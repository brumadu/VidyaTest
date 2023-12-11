import {Alert, FlatList, RefreshControl, Text} from 'react-native';
import Button from '../../../atoms/button/Button';
import ClientCard from '../../../molecules/Client/clientCard/ClientCard';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {fetchClient} from '../../../../services/realm/FetchClient';
import {useCallback, useEffect, useState} from 'react';
import {useClientSelect} from '../../../../store/reducers/Client.store';
import {SafeArea} from '../../../../styles';

export default function ClientStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const clientData = useClientSelect();
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
        data={clientData.clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ClientCard client={item} />}
        ListHeaderComponent={<SearchBar></SearchBar>}
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Adicionar Cliente"
        onPress={() => navigation.navigate('ClientForm')}></Button>
    </SafeArea>
  );
}