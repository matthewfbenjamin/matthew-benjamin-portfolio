import {
  Box,
  BoxProps,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  StackProps,
  useMediaQuery,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image'

import { useLayoutContext } from '../../../providers';
import NavSection from './NavSection';
import { ListItemType } from './types';

const TOP_LIST_ITEMS: ListItemType[] = [
  { title: 'home', destination: '/' },
  // { title: 'about', destination: '/' },
  { title: 'resume', destination: '/resume' },
  // { title: 'portfolio', destination: '/' },
  // { title: 'contact', destination: '/' },
];

const BOTTOM_LIST_ITEMS: ListItemType[] = [
  // { title: 'spotify buttons', destination: '/' },
  // { title: 'find my food', destination: '/' },
];

const Nav = (props: StackProps) => {
  return (
    <VStack
      align="flex-start"
      justifyContent="space-between"
      h={{ base: '100%', md: 'auto' }}
      pb="2"
      {...props}
    >
    <Box p="4">
      <NavSection title="fast track" listItems={TOP_LIST_ITEMS} />
      <NavSection title="mattquest showcase:" listItems={BOTTOM_LIST_ITEMS} />
    </Box>

    <a
      href="http://textfiles.com/underconstruction/"
      target="_blank"
      rel="noreferrer"
      style={{ alignSelf: 'center' }}
    >
      <Image
        src="/under_construction.gif"
        alt="This website is under construction"
        width={150}
        height={100}
      />
    </a>
    </VStack>
  );
};

const Navigation = () => {
  const { isOpen, onClose } = useLayoutContext();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { colors } = useTheme()

  const navOutlineProps: BoxProps = {
    borderRightColor: "black",
    borderRightStyle: "solid",
    borderRightWidth: "4px",
    outline: `4px solid ${colors.primary}`,
    boxShadow: "2px 0px 10px rgba(0, 0, 0)",
    backgroundColor: "tertiary",
    backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.16) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 1px, transparent 1px);
    `,
    backgroundSize: "48px 48px",
  }

  if (isLargerThan768) return <Nav {...navOutlineProps} />

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        {...navOutlineProps}
      >
        <DrawerCloseButton />
        <Nav />
      </DrawerContent>
    </Drawer>
  );
};

export default Navigation;
