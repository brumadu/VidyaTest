import styled from 'styled-components/native';

export const ClientIconArea = styled.View`
  background-color: ${props => props.theme.colors.primaryButton};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

export const Initials = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 28px;
`;
