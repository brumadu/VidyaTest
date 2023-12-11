import FormStructure from '../../components/organisms/clientFormStructure/ClientFromStructure';
import {Container, Scroll} from '../../styles';

export default function ClientForm({navigation}: any) {
  return (
    <Container>
      <Scroll>
        <FormStructure />
      </Scroll>
    </Container>
  );
}
