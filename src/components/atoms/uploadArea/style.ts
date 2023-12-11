import styled from 'styled-components/native';

export const UploadSafeArea = styled.Pressable`
  height: 140;
  margin-top: 15px;
  border-radius: 16px;
  border-width: 3px;
  border-style: dashed;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const UploadContent = styled.View`
  background-color: ${props => props.theme.colors.primaryButton};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
`;

export const UploadTitle = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 24px;
`;

export const UploadSubtitle = styled.Text`
  align-self: center;
  color: ${props => props.theme.colors.secondaryText};
  font-size: 20px;
  margin-bottom: 25px;
`;
