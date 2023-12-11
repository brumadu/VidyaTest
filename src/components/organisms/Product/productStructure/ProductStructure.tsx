import {FlatList, RefreshControl} from 'react-native';
import Button from '../../../atoms/button/Button';
import SearchBar from '../../../molecules/MainTab/searchBar/SearchBar';
import ProductCard from '../../../molecules/Product/productCard/ProductCard';
import {useCallback, useEffect, useState} from 'react';
import {SafeArea} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Product,
  useProductSelect,
} from '../../../../store/reducers/Product.store';

export default function ProductStructure() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const productData = useProductSelect();
  const [filteredProductData, setFilteredProductData] = useState<Product[]>(
    productData.products,
  );
  const [searchText, setSearchText] = useState('');

  function searchFilter(text: any) {
    if (text) {
      const newData = productData.products.filter(item => {
        const itemData = item.name ? item.name : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProductData(newData);
      setSearchText(text);
    } else {
      setFilteredProductData(productData.products);
      setSearchText(text);
    }
  }

  useEffect(() => {
    searchFilter(``);
  }, [handleAddProduct]);

  function handleAddProduct() {
    navigation.navigate('ProductForm');
  }

  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={filteredProductData}
        keyExtractor={item => item.name}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <ProductCard product={item} />}
        ListHeaderComponent={
          <SearchBar text={searchText} changeText={searchFilter}></SearchBar>
        }
        stickyHeaderIndices={[0]}></FlatList>
      <Button
        buttonName="Adicionar Produto"
        onPress={() => handleAddProduct()}></Button>
    </SafeArea>
  );
}
