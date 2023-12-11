import FormStructure from '../../components/organisms/Client/clientFormStructure/ClientFormStructure';
import {Container, Scroll} from '../../styles';

export default function ClientForm() {
  return (
    <Container>
      <Scroll>
        <FormStructure />
      </Scroll>
    </Container>
  );
}
