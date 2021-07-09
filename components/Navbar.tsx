import styled from 'styled-components';
import Link from 'next/link';

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0);
  padding: 2rem 10rem 2rem 5rem;
`;

const NavLogo = styled.div`
  font-size: 3rem;
  letter-spacing: 5px;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  margin-right: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
`;

const links = ['home', 'about', 'blog', 'contact'];

export const Navbar = () => {
  return (
    <div>
      <NavbarStyle>
        <NavLogo>JW</NavLogo>
        <NavLinksContainer>
          {links.map((link) => (
            <Link key={link} href={`/${link}`} passHref={true}>
              <NavLink> {link} </NavLink>
            </Link>
          ))}
        </NavLinksContainer>
      </NavbarStyle>
    </div>
  );
};
