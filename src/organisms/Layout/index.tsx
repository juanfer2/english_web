import { LayoutStyled } from './Layout.styles';
import Sidebar from '../Sidebar';

export interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutStyled>
      <Sidebar />
      <main>{children}</main>
    </LayoutStyled>
  );
}

export default Layout;
