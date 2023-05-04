import { Box, UnorderedList } from '@chakra-ui/react';
import NavHeader from './NavHeader';
import NavListItem from './NavListItem';
import { ListItemType } from './types';

const NavSection = ({ title, listItems }: { title: string; listItems: ListItemType[] }) => (
  (listItems.length > 0 ? (<>
    <Box>
      <NavHeader title={title} />
    </Box>
    <UnorderedList pl={4}>
      {listItems.map((item) => (
        <NavListItem key={item.title} item={item} />
      ))}
    </UnorderedList>
  </>) : null )
);

export default NavSection;
