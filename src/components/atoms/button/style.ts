import styled from 'styled-components/native';

export const ButtonArea = styled.Pressable`
  background-color: ${props => props.theme.colors.primaryButton};
  margin-top: 10px;
  height: 60px;
  border-radius: 15px;
  justify-content: center;
  align-self: center;
  width: 90%;
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: ${props => props.theme.colors.background};
  font-size: 16px;
`;
