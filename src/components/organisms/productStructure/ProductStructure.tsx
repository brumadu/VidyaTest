import {FlatList, RefreshControl} from 'react-native';
import Button from '../../atoms/button/Button';
import SearchBar from '../../molecules/searchBar/SearchBar';
import ProductCard from '../../molecules/productCard/ProductCard';
import {useCallback, useState} from 'react';
import {useProductSelect} from '../../../store/reducers/Product.store';
import {SafeArea} from '../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ProductStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const productData = useProductSelect();
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
        data={productData.products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCard product={item} />}
        ListHeaderComponent={<SearchBar></SearchBar>}
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Adicionar produto"
        onPress={() => navigation.navigate('ProductForm')}></Button>
    </SafeArea>
  );
}
