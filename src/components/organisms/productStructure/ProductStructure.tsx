import {FlatList, RefreshControl} from 'react-native';
import Button from '../../atoms/button/Button';
import SearchBar from '../../molecules/searchBar/SearchBar';
import ProductCard from '../../molecules/productCard/ProductCard';
import {useCallback, useState} from 'react';
import {useProductSelect} from '../../../store/reducers/Product.store';
import {SafeArea} from '../../../styles';

export default function ProductStructure({navigation}: any) {
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
        renderItem={({item}) => <ProductCard product={item} />}
        ListHeaderComponent={<SearchBar></SearchBar>}></FlatList>
      <Button
        buttonName="Adicionar produto"
        onPress={() => navigation.navigate('ProductForm')}></Button>
    </SafeArea>
  );
}
