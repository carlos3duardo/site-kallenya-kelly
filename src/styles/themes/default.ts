// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
        overflowY: 'scroll',
      },
    },
  },
  fonts: {
    body: 'Inter, Helvetica, Arial, sans-serif',
    heading: 'Inter, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
  colors: {
    whatsapp: {
      50: '#D0F1D7',
      100: '#B8EAC3',
      200: '#A1E3AF',
      300: '#89DC9B',
      400: '#72D587',
      500: '#59CE72',
      600: '#3AC358',
      700: '#31A349',
      800: '#27823B',
      900: '#1D622C',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
