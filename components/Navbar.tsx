import styled, { useTheme } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Theme, ThemeProps } from '../config';
import { Cross, Hamburger } from '../icons';
import { useEffect, useState } from 'react';

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

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    padding: 6rem 4rem;
  }
`;

const NavLogo = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    font-size: 2.5rem;
  }
`;

const NavLinksContainer = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    position: absolute;
    right: 0;
    height: 100vh;
    top: 0;
    background: ${(props: ThemeProps) => props.theme.colors.indigo1};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;

    & > li {
      margin: 3rem 0;
      opacity: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 2rem;
  user-select: none;
  padding: 1.5rem;
  position: relative;
  margin: 0 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) =>
    props.className === 'active' ? props.theme.colors.indigo11 : 'inherit'};
  font-weight: 300;
  transition: all 0.5s;

  @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    font-size: 3rem;
  }

  &:after {
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: ${(props) => (props.className === 'active' ? '100%' : '0%')};
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

const links = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
  { title: 'blog', path: '/blog' },
  { title: 'contact', path: '/contact' },
];

export const Navbar = () => {
  const theme = useTheme() as Theme;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [iconPath, setIconPath] = useState('/jw-logo-dark.svg');
  const router = useRouter();

  const width = 50;
  const height = width;

  useEffect(() => {
    setIconPath(`${window.location.origin}/jw-logo-dark.svg`);
    console.log(iconPath);
  }, [iconPath]);

  return (
    <NavbarStyle>
      <NavLogo src={iconPath} alt="JW Logo Dark" />
      <Hamburger
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        style={{ width, height }}
        color={theme.colors.indigo8}
        onHoverColor={theme.colors.indigo9}
      />
      <NavLinksContainer
        style={{ ...(navbarOpen && { transform: 'translateX(0%)' }) }}
      >
        <Cross
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          style={{ width, height }}
          color={theme.colors.indigo12}
          onHoverColor={theme.colors.indigo11}
        />
        {links.map((link, i) => (
          <li
            key={link.title}
            style={{
              ...(navbarOpen && {
                animation: `linkFade 0.5s ease forwards ${i / 7 + 0.75}s`,
              }),
            }}
          >
            <Link href={`${link.path}`} passHref={true}>
              <NavLink
                className={router.pathname === link.path ? 'active' : ''}
              >
                {link.title}
              </NavLink>
            </Link>
          </li>
        ))}
      </NavLinksContainer>
    </NavbarStyle>
  );
};
