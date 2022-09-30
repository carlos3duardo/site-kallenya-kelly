import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flex, Button, IconButton, HStack, chakra } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ImWhatsapp } from 'react-icons/im';

import logo from '../../assets/images/logo.svg';
import Container from '../Layout/Container';

interface NavItemProps {
  label: string;
  href: string;
}

interface MobibeNavToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const navItems: Array<NavItemProps> = [
  {
    label: 'Sintomas',
    href: '#sintomas',
  },
  {
    label: 'Como funciona',
    href: '#como-funciona',
  },
  {
    label: 'Quem sou',
    href: '#quem-sou',
  },
  {
    label: 'Dúvidas',
    href: '#duvidas',
  },
  {
    label: 'Saiba mais',
    href: '#saiba-mais',
  },
];

function Logo(): JSX.Element {
  return (
    <chakra.figure
      margin="0"
      padding="1rem 0"
      border="0"
      display="block"
      lineHeight="1"
    >
      <chakra.img src={logo} width="60px" height="60px" />
    </chakra.figure>
  );
}

function DesktopNav(): JSX.Element {
  return (
    <motion.div initial="hidden" animate="show">
      <HStack
        display={{ base: 'none', lg: 'flex' }}
        as="ul"
        listStyleType="none"
        spacing="0"
        borderRadius="4px"
      >
        {navItems.map(({ label, href }) => (
          <chakra.li key={href}>
            <Link href={href} passHref>
              <Button
                as="a"
                fontSize="0.875rem"
                variant="ghost"
                borderColor="transparent"
                _hover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.42)',
                }}
              >
                {label}
              </Button>
            </Link>
          </chakra.li>
        ))}
      </HStack>
    </motion.div>
  );
}

function MobileNavToggleButton({
  isOpen,
  onClick,
}: MobibeNavToggleButtonProps): JSX.Element {
  return (
    <Flex display={{ base: 'flex', lg: 'none' }}>
      <IconButton
        onClick={onClick}
        icon={
          isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={7} h={7} />
        }
        variant="orange"
        aria-label="Toggle Navigation"
        _hover={{
          backgroundColor: 'transparent',
        }}
      />
    </Flex>
  );
}

export default function Header(): JSX.Element {
  return (
    <chakra.header position="fixed" top="0" left="0" width="100%" zIndex="10">
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <DesktopNav />
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button
            as="a"
            href="https://wa.me/5583988013537"
            fontSize="0.875rem"
            leftIcon={<ImWhatsapp />}
            colorScheme="whatsapp"
            variant="solid"
            target="_blank"
          >
            Contato
          </Button>
        </motion.div>
      </Container>
    </chakra.header>
  );
}
