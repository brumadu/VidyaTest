import {Alert, FlatList} from 'react-native';
import Button from '../../../atoms/button/Button';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import {useState} from 'react';
import {SafeArea} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useOrderSelect} from '../../../../store/reducers/Order.store';
import SelectedClientCard from '../../../molecules/Order/SelectedClientCard/SelectedClientCard';
import {useClientSelect} from '../../../../store/reducers/Client.store';

export default function OrderSelectStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const clientData = useClientSelect();
  const orderData = useOrderSelect();
  return (
    <SafeArea>
      <FlatList
        data={clientData.clients}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <SelectedClientCard
            client={item}
            isSelected={item.id === orderData.selectedProduct ? true : false}
          />
        )}
        ListHeaderComponent={<SearchBar></SearchBar>}
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Salvar"
        onPress={() => navigation.navigate('OrderForm')}></Button>
    </SafeArea>
  );
}
