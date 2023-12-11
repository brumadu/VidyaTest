import styled, {css} from 'styled-components/native';

interface props {
  fontSize: string;
}

export const PriceText = styled.Text<props>`
  color: ${props => props.theme.colors.primaryText};
  font-weight: bold;
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize + 'px'};
    `};
`;
