import styled from 'styled-components/native';

export const ClientIconArea = styled.View`
  background-color: ${props => props.theme.colors.primaryButton};
  border-radius: 20px;
  height: 85%;
`;

export const Initials = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 35px;
`;
