import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme, ThemeProps } from '../config';

import { GitHub, Gmail, LinkedIn } from '../icons';

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    font-size: 2rem;
    flex-direction: column;
  }
  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    height: 8rem;
  }

  span {
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    font-weight: 400;
    font-size: 1.5rem;
    margin-right: 2rem;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      margin-right: 0;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.75rem;
    }

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['2xl']}px) {
      font-size: 2rem;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > a > svg {
    margin-right: 2rem;
  }

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    justify-content: space-between;
    width: 35%;
    & > a > svg {
      margin-right: 0rem;
    }
  }
`;

export const Footer = () => {
  const theme = useTheme() as Theme;
  const width = 32.5;
  const height = width;
  const now = new Date();

  return (
    <FooterStyle>
      <IconContainer>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joshuawheeler93/"
          rel="noreferrer"
        >
          <LinkedIn
            style={{ width, height }}
            color={theme.colors.indigo8}
            onHoverColor={theme.colors.indigo9}
          />
        </a>
        <a target="_blank" href="mailto:jltwheeler@gmail.com" rel="noreferrer">
          <Gmail
            style={{ width, height }}
            color={theme.colors.indigo8}
            onHoverColor={theme.colors.indigo9}
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/jltwheeler"
          rel="noreferrer"
        >
          <GitHub
            style={{ width, height }}
            color={theme.colors.indigo8}
            onHoverColor={theme.colors.indigo9}
          />
        </a>
      </IconContainer>
      <span>Josh Wheeler &copy; {now.getFullYear()}</span>
    </FooterStyle>
  );
};
