import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
  padding: 2%;
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    maxHeight: '200%',
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const SafeArea = styled.View`
  align-items: 'center';
  justify-content: 'space-around';
  width: 95%;
  height: 100%;
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
