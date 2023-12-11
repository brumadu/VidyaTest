import {SearchFieldArea, SearchInputText} from './style';
import {searchProps} from '../../molecules/MainTab/searchBar/SearchBar';

export default function SearchInput(props: searchProps) {
  return (
    <SearchFieldArea>
      <SearchInputText
        placeholder={props.placeholder}
        autoCapitalize="none"
        value={props.text}
        onChangeText={props.changeText}></SearchInputText>
    </SearchFieldArea>
  );
}
