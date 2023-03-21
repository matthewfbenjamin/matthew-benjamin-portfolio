import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useMediaQuery,
} from '@chakra-ui/react';

import NavSection from './NavSection';
import { ListItemType, NavProps } from './types';

const TOP_LIST_ITEMS: ListItemType[] = [
  { title: 'home', destination: '/' },
  { title: 'about', destination: '/' },
  { title: 'resume', destination: '/' },
  { title: 'portfolio', destination: '/' },
  { title: 'contact', destination: '/' },
];

const BOTTOM_LIST_ITEMS: ListItemType[] = [
  { title: 'spotify buttons', destination: '/' },
  { title: 'find my food', destination: '/' },
];

const Nav = () => {
  return (
    <Box
      p="4"
      backgroundColor="tertiary"
      backgroundImage={`
            linear-gradient(to right, rgba(0, 0, 0, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 1px, transparent 1px);
        `}
      backgroundSize="48px 48px">
      <NavSection title="fast track" listItems={TOP_LIST_ITEMS} />
      <NavSection title="mattquest showcase:" listItems={BOTTOM_LIST_ITEMS} />
    </Box>
  );
};

const Navigation = ({ isOpen, onClose }: NavProps) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  console.log('isLargerThan768', isLargerThan768);
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
