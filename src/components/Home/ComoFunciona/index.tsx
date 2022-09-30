import { chakra, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Container from '../../Layout/Container';

import footer from './footer.svg';

export default function ComoFunciona(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      flexDirection={{ base: 'column-reverse', lg: 'column' }}
      alignItems="center"
      justifyContent="center"
      padding="3rem 0 10rem 0"
      backgroundColor="#DA729A"
      color="white"
    >
      <chakra.figure
        opacity={{ base: '1', lg: '0.2' }}
        position={{ base: 'relative', lg: 'absolute' }}
        top="0"
        left="0"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={{ base: '2rem 0 0 0', lg: '0' }}
      >
        <chakra.img
          src="/images/sessao-de-hipnoterapia.png"
          alt="Sessão de hipnoterapia"
          width={{ base: '90%', lg: '80%' }}
        />
      </chakra.figure>

      <Container position="relative">
        <Heading
          as="h2"
          fontSize="2.5rem"
          textAlign="center"
          marginBottom="3rem"
        >
          Como funciona
        </Heading>
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: '2rem', lg: '6rem' }}
        >
          <GridItem>
            <Heading as="h3" fontSize="1.8rem" mb="2rem">
              Risus quis varius quam quisque
            </Heading>
            <Text>
              A scelerisque purus semper eget duis at. Purus in mollis nunc sed
              id semper. Fames ac turpis egestas maecenas. At in tellus integer
              feugiat scelerisque varius morbi enim.
            </Text>
            <Text>
              Non consectetur a erat nam at lectus urna duis. Sit amet luctus
              venenatis lectus magna fringilla urna porttitor. Volutpat odio
              facilisis mauris sit amet massa vitae.
            </Text>
            <Text>
              Nibh ipsum consequat nisl vel. Amet justo donec enim diam
              vulputate ut pharetra sit amet. Et ultrices neque ornare aenean
              euismod elementum nisi quis eleifend.
            </Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" fontSize="1.8rem" mb="2rem">
              Viverra adipiscing at in tellus
            </Heading>
            <Text>
              Molestie at elementum eu facilisis. Ultrices neque ornare aenean
              euismod elementum nisi. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Sagittis orci a scelerisque purus
              semper eget duis at.
            </Text>
            <Text>
              Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
              Purus in massa tempor nec feugiat nisl pretium. Neque egestas
              congue quisque egestas diam in arcu cursus. Ut tristique et
              egestas quis. At lectus urna duis convallis convallis tellus.
            </Text>
            <Text>
              Vitae tortor condimentum lacinia quis vel eros. Pharetra sit amet
              aliquam id diam maecenas ultricies mi eget. Cras fermentum odio eu
              feugiat. Sit amet mauris commodo quis imperdiet massa tincidunt
              nunc pulvinar.
            </Text>
          </GridItem>
        </Grid>
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
