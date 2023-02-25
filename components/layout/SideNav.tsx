import * as React from 'react';
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const SideNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        backgroundColor="tertiary"
        backgroundImage={`
          linear-gradient(to right, grey 1px, transparent 1px),
          linear-gradient(to bottom, grey 1px, transparent 1px);
      `}
        backgroundSize="48px 48px">
        <DrawerHeader>
          <Flex alignItems="center">
            <Flex
              width="20px"
              height="20px"
              background="black"
              position="relative"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center">
              <Box
                width="10px"
                height="10px"
                background="primary"
                position="relative"
                borderRadius="50%"
              />
            </Flex>
            <Box
              position="relative"
              left="-2px"
              width="34px"
              height="4px"
              borderY="2px solid black"
            />
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              fontStyle="italic"
              left="-4px"
              position="relative">
              FastTrack
            </Text>
          </Flex>
        </DrawerHeader>
        <DrawerCloseButton />
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Contact</Link>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNav;

/*
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
*/
