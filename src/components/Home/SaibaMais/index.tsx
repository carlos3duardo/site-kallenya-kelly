import { chakra, Heading } from '@chakra-ui/react';
import Container from '../../Layout/Container';

import footer from './footer.svg';

export default function SaibaMais(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="3rem 0 10rem 0"
      backgroundColor="#3D40A4"
      color="white"
    >
      <Container position="relative">
        <Heading
          as="h2"
          fontSize="2.5rem"
          textAlign="center"
          marginBottom="3rem"
        >
          Saiba Mais
        </Heading>
      </Container>
      <chakra.figure position="absolute" bottom="0" left="0" width="100%">
        <chakra.img
          src={footer}
          width="100%"
          height="200px"
          objectFit="cover"
          objectPosition="center"
        />
      </chakra.figure>
    </chakra.div>
  );
}
