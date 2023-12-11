import styled from 'styled-components/native';

export const CardProductArea = styled.Pressable`
  background-color: ${props => props.theme.colors.secondaryButton};
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 45%;
  height: 200px;
  border-radius: 15px;
`;

export const ProductImageArea = styled.View`
  align-items: center;
  height: 60%;
  width: 100%;
`;

export const ProductImage = styled.Image`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 100%;
  width: 100%;
`;
export const ProductTextArea = styled.View`
  flex: 1;
  height: 40%;
  margin: 10px;
  margin-left: 15px;
  align-self: flex-start;
`;
