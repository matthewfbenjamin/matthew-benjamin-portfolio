import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';

import NavSection from './NavSection';
import { ListItemType, NavProps } from './types';

const TOP_LIST_ITEMS: ListItemType[] = [
  { title: 'home', destination: '/' },
  // { title: 'about', destination: '/' },
  { title: 'resume', destination: '/' },
  { title: 'portfolio', destination: '/' },
  { title: 'contact', destination: '/' },
];

const BOTTOM_LIST_ITEMS: ListItemType[] = [
  { title: 'spotify buttons', destination: '/' },
  { title: 'find my food', destination: '/' },
];

const Nav = () => {
  const { colors } = useTheme()
  return (
    <Box
      p="4"
      backgroundColor="tertiary"
      backgroundImage={`
            linear-gradient(to right, rgba(0, 0, 0, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 1px, transparent 1px);
        `}
      backgroundSize="48px 48px"
      boxShadow="2px 0px 10px rgba(0, 0, 0)"
      borderRightColor="black"
      borderRightStyle="solid"
      borderRightWidth="4px"
      // outline: 5px solid red;
      outline={`4px solid ${colors.primary}`}
    >
      <NavSection title="fast track" listItems={TOP_LIST_ITEMS} />
      <NavSection title="mattquest showcase:" listItems={BOTTOM_LIST_ITEMS} />
    </Box>
  );
};

const Navigation = ({ isOpen, onClose }: NavProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  if (isLargerThan768) return <Nav />;

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        backgroundColor="tertiary"
        backgroundImage={`
            linear-gradient(to right, rgba(0, 0, 0, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 1px, transparent 1px);
        `}
        backgroundSize="48px 48px">
        <DrawerCloseButton />
        <Nav />
      </DrawerContent>
    </Drawer>
  );
};

export default Navigation;
