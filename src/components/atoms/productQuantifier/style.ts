import styled from 'styled-components/native';

export const ProductQuantifierArea = styled.View`
  justify-content: space-between;
  width: 50%;
  flex-direction: row;
`;

export const QuantifierButton = styled.Pressable`
  align-items: center;
  width: 30%;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.secondaryButton};
`;

export const QuantifierText = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-weight: bold;
  font-size: 20px;
`;
