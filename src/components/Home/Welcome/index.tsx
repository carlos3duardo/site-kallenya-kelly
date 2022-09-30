import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import logoImage from '../../../assets/images/logo.svg';
import wave from './footer.svg';

export default function Welcome(): JSX.Element {
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
      <motion.figure>
        <chakra.img
          src={logoImage}
          width={{ base: '80%', lg: '460px' }}
          margin="0 auto"
        />
      </motion.figure>
      <chakra.figure position="absolute" bottom="0" left="0" width="100%">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <chakra.img src={wave} width="100%" />
        </motion.div>
      </chakra.figure>
    </chakra.div>
  );
}
