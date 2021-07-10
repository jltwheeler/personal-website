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
  padding-bottom: 2.5rem;

  span {
    color: ${(props: ThemeProps) => props.theme.colors.indigo9};
    font-weight: 400;
    font-size: 1.5rem;
    margin-right: 2rem;
  }
`;

export const Footer = () => {
  const theme = useTheme() as Theme;
  const width = 30;
  const height = 30;
  const now = new Date();

  return (
    <FooterStyle>
      <LinkedIn
        style={{ width, height, marginRight: width / 2 }}
        color={theme.colors.indigo9}
      />
      <Gmail
        style={{ width, height, marginRight: width / 2 }}
        color={theme.colors.indigo9}
      />
      <GitHub
        style={{ width, height, marginRight: width / 2 }}
        color={theme.colors.indigo9}
      />
      <span>Josh Wheeler &copy; {now.getFullYear()}</span>
    </FooterStyle>
  );
};
