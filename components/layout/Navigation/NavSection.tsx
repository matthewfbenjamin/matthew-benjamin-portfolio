import { Box, UnorderedList } from '@chakra-ui/react';
import NavHeader from './NavHeader';
import NavListItem from './NavListItem';
import { ListItemType } from './types';

const NavSection = ({ title, listItems }: { title: string; listItems: ListItemType[] }) => (
  <>
    <Box>
      <NavHeader title={title} />
    </Box>
    <UnorderedList pl={4}>
      {listItems.map((item) => (
        <NavListItem key={item.title} item={item} />
      ))}
    </UnorderedList>
  </>
);

export default NavSection;
