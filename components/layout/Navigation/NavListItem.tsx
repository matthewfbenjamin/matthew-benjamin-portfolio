import { Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLayoutContext } from '../../../providers';
import { ListItemType } from './types';

const NavListItem = ({ item }: { item: ListItemType }) => {
  const { onClose } = useLayoutContext();
  return (
    <ListItem key={item.title}>
      <Link
        onClick={onClose}
        as={NextLink}
        href={item.destination}
        fontSize="xl"
        color="blue.700"
        textDecoration="underline"
        fontWeight="bold">
        {`${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`}
      </Link>
    </ListItem>
  )
};

export default NavListItem;
