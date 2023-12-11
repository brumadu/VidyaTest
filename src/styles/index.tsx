import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    padding: '2%',
    alignItems: 'center',
  },
}))`
  background-color: ${props => props.theme.colors.background};
`;

export const Row = styled.View`
  display: flex;
`;

export const CardArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 96%;
  height: 10%;
`;

export const Title = styled.Text`
  font-size: 28px;
`;
