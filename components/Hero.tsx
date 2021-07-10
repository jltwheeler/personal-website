import styled from 'styled-components';
import Link from 'next/link';

import { ThemeProps } from '../config';

const HeroSection = styled.section`
  margin: 0 auto;
  padding-top: 6rem;
  width: 70%;

  h1 {
    font-size: 6.5rem;
    font-weight: 400;
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    letter-spacing: 3px;
    padding-top: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 200;
  }

  h3 {
    font-size: 3rem;
    font-weight: 300;
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};
    font-style: italic;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 200;
    padding-bottom: 2.5rem;
    line-height: 3rem;
  }
`;

const LinksContainer = styled.article`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const NavLink = styled.a`
  user-select: none;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props: ThemeProps) => props.theme.colors.indigo11};
  background: ${(props: ThemeProps) => props.theme.colors.indigo4};
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.indigo6};
  letter-spacing: 2px;
  font-size: 1.5rem;
  border-radius: 7px;
  padding: 1rem 2.5rem;

  &:not(:first-child) {
    margin: 0 5rem;
  }

  &:hover {
    background: ${(props: ThemeProps) => props.theme.colors.indigo5};
    border-color: ${(props: ThemeProps) => props.theme.colors.indigo8};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  }

  &:active {
    background: ${(props: ThemeProps) => props.theme.colors.indigo6};
    border-color: ${(props: ThemeProps) => props.theme.colors.indigo7};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  }
`;

export const Hero = () => {
  const links = [
    { label: 'learn more', route: 'about' },
    { label: 'my blog', route: 'blog' },
  ];

  return (
    <HeroSection>
      <h2>Hello, world... I&apos;m</h2>
      <h1>Josh Wheeler</h1>
      <h3>
        I have a deep passion for technology, problem solving and learning.
      </h3>
      <p>
        I&apos;m a software engineer based in London who specialises in
        delivering web applications across the full stack. I also am an AWS
        Certified Developer - Associate who really enjoys building native
        solutions with AWS. Currently I work at By Miles - a car insurance you
        pay by the mile.
      </p>
      <p>
        If you want to learn more about me or read what I&apos;ve been up to
        please feel free to click the links below:
      </p>

      <LinksContainer>
        {links.map((link) => (
          <Link key={link.route} href={`/${link.route}`} passHref={true}>
            <NavLink> {link.label} </NavLink>
          </Link>
        ))}
      </LinksContainer>
    </HeroSection>
  );
};
