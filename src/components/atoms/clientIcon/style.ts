import styled from 'styled-components/native';

const colors = ['#GSA', '#AEA', '#ASD', '#FASD', '#AEA'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

export const ClientIconArea = styled.View`
  background-color: ${randomColor};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

export const Initials = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: 28px;
`;
