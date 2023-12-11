import styled from 'styled-components/native';

export const ProductDataArea = styled.View`
  width: 100%;
  height: 100%;
`;

export const ProductDataTitle = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 18px;
  font-weight: bold;
`;

export const ProductDataSubTitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 18px;
`;

export const ProductDataDescription = styled.Text`
  font-size: 10px;
`;
