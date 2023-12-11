import styled, {css} from 'styled-components/native';

export interface button {
  isScrollable: boolean | undefined;
}

export const ButtonArea = styled.Pressable<button>`
  bottom: 0;

  background-color: ${props => props.theme.colors.primaryButton};
  margin-top: 10px;
  margin-bottom: 10px;
  height: 60px;
  border-radius: 15px;
  justify-content: center;
  align-self: center;
  width: 90%;
  ${props =>
    props.isScrollable
      ? css`
          position: relative;
        `
      : css`
          position: absolute;
        `}
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: ${props => props.theme.colors.background};
  font-size: 16px;
`;
