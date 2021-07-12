import React from 'react';
import styled from 'styled-components';
import { theme, ThemeProps } from '../config';

const StyledSVG = styled.svg`
  display: none;
  cursor: pointer;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    display: revert;
  }
`;

export const Cross: React.FC<{
  style: Record<string, string | number>;
  color?: string;
}> = ({ color = theme.colors.indigo8, style }) => {
  return (
    <StyledSVG
      viewBox="0 0 329.26933 329"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
      />
    </StyledSVG>
  );
};
