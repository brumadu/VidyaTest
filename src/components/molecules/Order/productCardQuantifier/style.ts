import styled from 'styled-components/native';

export const ProductCardQuantifierArea = styled.View`
  width: 90%;
  align-self: center;
  height: 140px;
  flex-direction: row;
  padding: 10px;
`;

export const ProductCardInfoArea = styled.View`
  justify-content: space-around;
  padding: 10px;
  width: 100%;
`;

export const ProductCardTextArea = styled.View`
  width: 100%;
`;

export const ProductQuantityQuantifierArea = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardTitle = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 20px;
  font-weight: bold;
`;

export const ProductCardSubtitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 16px;
`;
