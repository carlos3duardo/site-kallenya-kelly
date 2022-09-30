import { chakra } from '@chakra-ui/react';

export default function Footer(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      minHeight="200px"
      backgroundColor="#34327a"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      Rodapé
    </chakra.div>
  );
}
