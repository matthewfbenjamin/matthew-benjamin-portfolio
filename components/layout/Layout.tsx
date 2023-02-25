import SideNav from './SideNav';

export default function Layout({ children }) {
  return (
    <>
      <SideNav />
      <main>{children}</main>
    </>
  );
}
