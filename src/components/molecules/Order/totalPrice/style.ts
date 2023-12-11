import styled from 'styled-components/native';

export const TotalPriceArea = styled.View`
  width: 90%;
  height: 50px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalPriceText = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 16px;
`;
