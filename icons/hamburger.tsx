import React, { useRef } from 'react';
import styled from 'styled-components';
import { theme, ThemeProps } from '../config';

const StyledSVG = styled.svg`
  display: none;
  cursor: pointer;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    display: revert;
  }
`;

export const Hamburger: React.FC<{
  style: Record<string, string | number>;
  color?: string;
  onHoverColor?: string;
}> = ({
  color = theme.colors.indigo8,
  onHoverColor = theme.colors.indigo9,
  style,
}) => {
  const ref = useRef<SVGPathElement>(null);

  return (
    <StyledSVG
      style={style}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        if (ref.current) {
          ref.current.style.fill = onHoverColor;
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.fill = color;
        }
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        ref={ref}
        d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
      />
    </StyledSVG>
  );
};
