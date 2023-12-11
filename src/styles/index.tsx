import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
  padding: 2%;
  align-items: center;
`;

export const Row = styled.View`
  display: flex;
`;

export const Title = styled.Text`
  font-size: 28px;
`;
