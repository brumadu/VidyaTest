import styled from 'styled-components/native';

export const SelectClientArea = styled.View`
  align-self: center;
  width: 90%;
  height: 140px;
  border-color: lightgray;
  border-width: 2px;
  border-radius: 15px;
  padding: 15px;
`;

export const SelectClientText = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const SelectClientInfoArea = styled.View`
  width: 100%;
  padding: 15px;
  height: 70%;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.secondaryButton};
`;

export const ClientInfoTitle = styled.Text`
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  font-weight: bold;
`;

export const ClientInfoSubtitle = styled.Text`
  color: ${props => props.theme.colors.secondaryText};
  font-size: 16px;
`;
