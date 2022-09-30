import { chakra, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../Layout/Container';

import footer from './footer.svg';

interface SintomaProps {
  id: string;
  iconUrl: string;
  text: string;
}

const sintomas: Array<SintomaProps> = [
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-2.png',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-3a.png',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-4.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-2.png',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-3a.png',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-4.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-2.png',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-3a.png',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: uuidv4(),
    iconUrl: '/images/sintoma-4.png',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function Sintomas(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#f5bdcc"
      padding="3rem 0 10rem 0"
    >
      <Container>
        <Heading fontSize="2.5rem" textAlign="center" marginBottom="3rem">
          Você sofre com algum desses sintomas?
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={{
            base: '1rem',
            md: '2.5rem',
          }}
        >
          {sintomas.map(sintoma => (
            <GridItem key={sintoma.id}>
              <chakra.div
                backgroundColor="rgba(255, 255, 255, 0.2)"
                textAlign="center"
                padding="1.5rem"
                height="100%"
                borderRadius="4px"
              >
                <Image src={sintoma.iconUrl} width={64} height={64} />
                <Text fontSize="0.875rem" textAlign="center">
                  {sintoma.text}
                </Text>
              </chakra.div>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <chakra.figure position="absolute" bottom="0" left="0" width="100%">
        <chakra.img src={footer} width="100%" height="200px" objectFit="cover" objectPosition="center" />
      </chakra.figure>
    </chakra.div>
  );
}
