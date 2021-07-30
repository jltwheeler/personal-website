import styled from 'styled-components';
import { ThemeProps } from '../config';

export const Accent = styled.span`
  color: ${(props: ThemeProps) => props.theme.colors.indigo11};
  font-weight: 500;
`;
