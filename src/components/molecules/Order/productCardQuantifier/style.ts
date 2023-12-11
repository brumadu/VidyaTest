import styled from 'styled-components/native';

export const ProductCardQuantifierArea = styled.View`
  width: 90%;
  height: 140px;
  flex-direction: row;
  padding: 10px;
`;

export const ProductCardInfoArea = styled.View`
  width: 100%;
  justify-content: space-around;
  padding: 10px;
`;

export const ImageArea = styled.View`
  height: 100%;
  width: 20%;
`;

export const ProductImage = styled.Image`
  height: 80%;
  width: 100%;
  border-radius: 15px;
`;

export const ProductCardTextArea = styled.View`
  width: 100%;
`;

export const ProductQuantityQuantifierArea = styled.View`
  width: 79%;
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
