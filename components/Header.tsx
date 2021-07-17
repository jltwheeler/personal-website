import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '../config';

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  color: ${(props: ThemeProps) => props.theme.colors.indigo10};
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props: ThemeProps) => props.theme.colors.indigo11};
`;

const HeaderStyle = styled.header`
  margin-bottom: 4rem;
`;

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyle>
      <H1>{title}</H1>
      <HR />
    </HeaderStyle>
  );
};
