import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '../config';

const H1 = styled.h1`
  font-size: 5.5rem;
  font-weight: 500;
  line-height: 1.1;
  color: ${(props: ThemeProps) => props.theme.colors.indigo10};
`;

const HeaderStyle = styled.header`
  margin-bottom: 2rem;
  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    margin-bottom: 1rem;
  }
`;

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyle>
      <H1>{title}</H1>
    </HeaderStyle>
  );
};
