import ClientDetailStructure from '../../components/organisms/clientDetailStructure/ClientDetailStructure';
import {Container, Scroll} from '../../styles';
import {useRoute} from '@react-navigation/native';

export default function ClientDetail() {
  const route = useRoute();
  return (
    <Container>
      <ClientDetailStructure
        client={
          // @ts-ignore
          route.params.selectedClient
        }
      />
    </Container>
  );
}
