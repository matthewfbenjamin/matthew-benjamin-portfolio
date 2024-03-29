import { Box, Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { TbArrowBearLeft, TbArrowBearRight, TbArrowNarrowLeft, TbArrowNarrowRight, TbArrowNarrowUp } from 'react-icons/tb'

type DirectionProp = 'bearLeft' | 'bearRight' | 'left' | 'right' | 'up'

const getArrow = (direction: DirectionProp): ReactElement<IconType> => {
  switch (direction) {
    case 'up':
      return <TbArrowNarrowUp size="100%" />
      break;
    case 'bearLeft':
      return <TbArrowBearLeft size="100%" />
      break;
    case 'bearRight':
      return <TbArrowBearRight size="100%" />
      break;
    case 'left':
      return <TbArrowNarrowLeft size="100%" />
      break;
    case 'right':
      return <TbArrowNarrowRight size="100%" />
      break;
    default:
      return null;
      break;
  };
}

export const DirectionIcon = ({ direction, ...rest }: { direction: DirectionProp }) => (
  <Flex
    padding={{ base: '3', md: '4' }}
    maxW={{ base: '14', md: '16' }}
    {...rest}
  >
    <Flex
      background="tertiary"
      height={{ base: '7', md: '8' }}
      width={{ base: '7', md: '8' }}
      transform="rotate(45deg)"
      borderWidth={2}
      borderStyle="solid"
      borderColor="black"
    >
      <Box transform="rotate(-45deg)">
        {getArrow(direction)}
      </Box>
    </Flex>
  </Flex>
)