import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

// TODO: Create SVG
export const InterstateIcon = () => (
  <Flex>
    <Image
      src="/interstate.png"
      alt='interstate icon'
      width="75"
      height="75"
    />
  </Flex>
)