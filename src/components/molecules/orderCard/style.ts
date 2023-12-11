import styled from 'styled-components/native';

export const IconArea = styled.View`
  width: 20%;
  padding: 10px;
`;

export const OrderTextArea = styled.View`
  width: 55%;
`;

export const PriceArea = styled.View`
  width: 25%;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 22px;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 16px;
`;
