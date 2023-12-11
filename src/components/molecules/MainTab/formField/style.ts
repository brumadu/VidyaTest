import styled, {css} from 'styled-components/native';

export const FormFieldArea = styled.View`
  width: 100%;
  margin-top: 10px;
  justify-content: space-around;
`;

interface bigArea {
  isBig?: boolean;
}

export const InputArea = styled.View<bigArea>`
  border: 1px;
  border-radius: 15px;
  ${props =>
    props.isBig &&
    css`
      height: 110px;
    `};
`;
