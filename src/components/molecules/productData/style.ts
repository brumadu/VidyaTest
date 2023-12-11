import styled from 'styled-components/native';

export const ProductDataArea = styled.View`
  width: 100%;
  height: 100%;
`;

export const ProductTextArea = styled.View`
  background-color: ${props => props.theme.colors.background};
  height: 50%;
  margin-left: 20px;
`;

export const ProductDataTitle = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 28px;
  font-weight: bold;
`;

export const ProductDataSubTitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 22px;
`;

export const ProductDataDescription = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 18px;
  margin-top: 30px;
`;
