import styled from 'styled-components';
import { ThemeProps } from '../config';

export const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    width: 70%;
  }

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    width: 80%;
  }
`;
