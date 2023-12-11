import styled from 'styled-components/native';

export const ProductArea = styled.Pressable`
  background-color: ${props => props.theme.colors.secondaryButton};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 45%;
  height: 200px;
  border-radius: 15px;
`;

export const ProductTextArea = styled.View`
  flex: 1;
  height: 40%;
  margin: 10px;
  margin-left: 15px;
  align-self: flex-end;
`;

export const ProductImageArea = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: teal;
  height: 60%;
`;
