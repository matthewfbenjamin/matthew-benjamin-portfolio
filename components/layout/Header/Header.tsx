import {
  Box,
  Heading,
  IconButton,
  Text,
  UseDisclosureProps,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
// eslint-disable-next-line camelcase
import { PT_Serif } from '@next/font/google';

const OffsetLetter = styled.span`
  vertical-align: ${(props) => props.offset};
`;

interface HeaderProps extends Pick<UseDisclosureProps, 'onOpen'> {
  subText: string;
}

const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' });


const Header = ({ onOpen, subText }: HeaderProps) => {
  const [isSmallerThan767] = useMediaQuery('(max-width: 767px)');
  return (
    <Box justifyContent="center" width="100%">
      {isSmallerThan767 ? (
        <IconButton
          variant="ghost"
          aria-label="Open Menu"
          colorScheme="tertiary"
          icon={<MdMenu />}
          position="absolute"
          top="2"
          left="2"
          onClick={onOpen}
        />
      ) : null}
      <VStack spacing={4} p="2">
        <Heading
          as="h1"
          fontSize="8vmin"
          textAlign="center"
          sx={{ '-webkit-text-stroke': '4px #cf6e12;' }}
          color="primary">
          {[...'mattquest'].map((letter, index) => (
            <OffsetLetter key={index} offset={index % 2 === 0 ? "8%" : "0%"}>
              {letter}
            </OffsetLetter>
          ))}
        </Heading>
        <Text as="p" fontSize="2xl" textAlign="center" fontWeight="bold" className={ptSerif.className}>
          {subText}
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
