import styled from 'styled-components/native';

export const SearchFieldArea = styled.View`
  height: 45px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const SearchInputText = styled.TextInput`
  color: ${props => props.theme.colors.primaryText};
  width: 100%;
  font-size: 18px;
`;
