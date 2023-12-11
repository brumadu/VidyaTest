import styled from 'styled-components/native';

export const SearchBarArea = styled.View`
  background-color: ${props => props.theme.colors.secondaryButton};
  padding: 8px;
  border-radius: 24px;
  flex-direction: row;
  width: 100%;
`;

export const IconArea = styled.View`
  color: ${props => props.theme.colors.primaryText};
  width: 15%;
  align-items: center;
  justify-content: center;
`;
