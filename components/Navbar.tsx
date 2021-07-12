import styled from 'styled-components';
import Link from 'next/link';

import { ThemeProps } from '../config';

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0);
  padding: 4rem 10rem 4rem 8rem;
`;

const NavLogo = styled.div`
  font-size: 3rem;
  letter-spacing: 3px;
  font-weight: 400;
  user-select: none;
  color: ${(props: ThemeProps) => props.theme.colors.indigo11};
  background: ${(props: ThemeProps) => props.theme.colors.indigo4};
  border-radius: 15%;
  padding: 0.75rem;
`;

const NavLinksContainer = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 2rem;
  user-select: none;
  padding: 1.5rem;
  position: relative;
  margin: 0 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  transition: all 0.5s;

  @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
    font-size: 2.5rem;
  }

  &:after {
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: ${(props: ThemeProps) => props.theme.colors.indigo11};
    height: 1px;
  }

  &:hover {
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};

    &:after {
      width: 100%;
    }
  }
`;

const links = ['home', 'about', 'blog', 'contact'];

export const Navbar = () => {
  return (
    <div>
      <NavbarStyle>
        <NavLogo>JW</NavLogo>
        <NavLinksContainer>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/${link}`} passHref={true}>
                <NavLink> {link} </NavLink>
              </Link>
            </li>
          ))}
        </NavLinksContainer>
      </NavbarStyle>
    </div>
  );
};
