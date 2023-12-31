import styled from 'styled-components/native';

export const ClientDataArea = styled.View`
  width: 100%;
  margin-left: 30px;
  height: 8%;
  justify-content: center;
  align-items: flex-start;
`;

export const ClientDataTitle = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: bold;
`;

export const ClientDataSubTitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 12px;
`;
