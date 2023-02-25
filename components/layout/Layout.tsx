import SideNav from './SideNav';

export default function Layout({ children }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <SideNav
        isOpen
        onClose={() => {
          // TODO
        }}
      />
      <main>{children}</main>
    </>
  );
}
