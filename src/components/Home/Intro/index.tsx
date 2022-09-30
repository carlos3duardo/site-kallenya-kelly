import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import logoImage from '../../../assets/images/logo.svg';

interface IntroInterface {
  setLoading: (loagind: boolean) => void;
}

export default function Intro({ setLoading }: IntroInterface): JSX.Element {
  return (
    <chakra.div
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#ffe4e1"
    >
      <motion.figure
        initial={{
          scale: 0.2,
          opacity: 0,
        }}
        animate={{
          scale: [0.2, 1.2, 1],
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        onAnimationComplete={() => setLoading(false)}
      >
        <chakra.img
          src={logoImage}
          width={{ base: '80%', lg: '460px' }}
          margin="0 auto"
        />
      </motion.figure>
    </chakra.div>
  );
}
