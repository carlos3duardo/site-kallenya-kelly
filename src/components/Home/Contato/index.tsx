import { chakra, Heading } from '@chakra-ui/react';
import Container from '../../Layout/Container';

export default function Contato(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="3rem 0 10rem 0"
      backgroundColor="#34327A"
      color="white"
    >
      <Container position="relative">
        <Heading
          as="h2"
          fontSize="2.5rem"
          textAlign="center"
          marginBottom="3rem"
        >
          Contato
        </Heading>
      </Container>
    </chakra.div>
  );
}
