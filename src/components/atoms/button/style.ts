import styled from 'styled-components/native';

export const ButtonArea = styled.Pressable`
  background-color: ${props => props.theme.colors.primaryButton};
  margin-top: 10px;
  height: 7%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 16px;
`;
