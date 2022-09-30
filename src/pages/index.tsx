import { chakra } from '@chakra-ui/react';
import { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import Intro from '../components/Home/Intro';
import Header from '../components/Header';
import Welcome from '../components/Home/Welcome';
import ComoFunciona from '../components/Home/ComoFunciona';
import QuemSou from '../components/Home/QuemSou';
import Sintomas from '../components/Home/Sintomas';
import PerguntasFrequentes from '../components/Home/PerguntasFrequentes';
import SaibaMais from '../components/Home/SaibaMais';
import Contato from '../components/Home/Contato';

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Intro setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <chakra.main position="relative">
              <Welcome />
              <Sintomas />
              <ComoFunciona />
              <QuemSou />
              <PerguntasFrequentes />
              <SaibaMais />
              <Contato />
            </chakra.main>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
