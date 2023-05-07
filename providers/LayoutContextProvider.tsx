import { UseDisclosureProps, useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

export const LayoutContext = createContext<Partial<UseDisclosureProps>>({});

export const useLayoutContext = () => useContext(LayoutContext)

export const LayoutProvider = ({ children }) => {
  const disclosure = useDisclosure();
  return (
    <LayoutContext.Provider value={disclosure}>
      {children}
    </LayoutContext.Provider>
  )
}