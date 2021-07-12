import styled from 'styled-components';
import Link from 'next/link';

import { ThemeProps } from '../config';

const HeroSection = styled.section`
  margin: 0 auto;
  padding-top: 6rem;
  width: 70%;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    padding-top: 4rem;
  }

  h1 {
    font-size: 6.5rem;
    font-weight: 400;
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    letter-spacing: 3px;
    padding-top: 2rem;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      font-size: 8rem;
      padding-top: 3rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 4rem;
      padding-top: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 200;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      font-size: 3rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 3rem;
    font-weight: 300;
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};
    font-style: italic;
    padding-bottom: 1rem;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      font-size: 3.5rem;
      padding-bottom: 2rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 2.25rem;
      padding-bottom: 2rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 200;
    padding-bottom: 2.5rem;
    line-height: 3rem;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      font-size: 2rem;
      padding-bottom: 4rem;
      font-weight: 200;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 1.5rem;
      padding-bottom: 2rem;
    }
  }
`;

const LinksContainer = styled.article`
  display: flex;
  justify-content: left;
  align-items: center;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    flex-direction: column;
  }
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

  @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
    font-size: 2rem;
    padding: 1.25rem 3rem;
  }

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    max-width: 12.5rem;
    padding: 1.5rem 2rem;
    text-align: center;
  }

  &:not(:first-child) {
    margin: 0 5rem;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      margin: 0 7.5rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      margin: 3rem 0;
    }
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

const Accent = styled.span`
  color: ${(props: ThemeProps) => props.theme.colors.indigo11};
  font-weight: 500;
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
        I&apos;m a software engineer based in <Accent>London</Accent> who
        specialises in delivering web applications across the full stack. I also
        am an <Accent>AWS Certified Developer - Associate </Accent> who really
        enjoys building cloud native solutions with AWS. Currently I work at{' '}
        <i>
          <Accent>By Miles</Accent>
        </i>{' '}
        - a car insurance you pay by the mile.
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
