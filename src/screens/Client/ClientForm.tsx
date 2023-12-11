import FormStructure from '../../components/organisms/clientFormStructure/ClientFormStructure';
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
