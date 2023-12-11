import styled from 'styled-components/native';

export const ProductArea = styled.Pressable`
  background-color: ${props => props.theme.colors.secondaryButton};
  border-radius: 15px;
  width: 50%;
  height: 30%;
  margin-top: 20px;
`;

export const ProductTextArea = styled.View`
  flex: 1;
  height: 40%;
  margin: 10px;
  margin-left: 15px;
  justify-content: space-evenly;
`;

export const ProductImageArea = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: teal;
  height: 60%;
`;
