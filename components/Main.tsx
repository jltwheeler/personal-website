import styled from 'styled-components';
import { ThemeProps } from '../config';

export const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 5rem;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    padding-bottom: 10rem;
  }
`;
