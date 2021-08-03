import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '../config';

const H1 = styled.h1<{ blogTitle: boolean }>`
  font-size: 5.5rem;
  font-weight: 500;
  line-height: 1.1;
  color: ${(props: ThemeProps) => props.theme.colors.indigo10};

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    font-size: ${(props) => (props.blogTitle ? '4rem' : '5.5rem')};
  }

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    font-size: ${(props) => (props.blogTitle ? '3.5rem' : '5.5rem')};
  }
`;

const HeaderStyle = styled.header`
  margin-bottom: 2rem;
  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    margin-bottom: 1rem;
  }
`;

interface HeaderProps {
  title: string;
  blogTitle?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, blogTitle = false }) => {
  return (
    <HeaderStyle>
      <H1 blogTitle={blogTitle}>{title}</H1>
    </HeaderStyle>
  );
};
