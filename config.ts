import { slate, slateDark, indigo, indigoDark } from '@radix-ui/colors';

export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const sizes = {
  '2xl': 1540,
  xl: 1280,
  l: 1000,
  m: 768,
  s: 480,
};

interface Sizes {
  '2xl': number;
  xl: number;
  l: number;
  m: number;
  s: number;
}

export const theme = {
  colors: {
    ...slate,
    ...indigo,
  },
  sizes,
};

export const darkTheme = {
  colors: {
    ...slateDark,
    ...indigoDark,
  },
  sizes,
};

export interface Theme {
  colors: Record<string, string>;
  sizes: Sizes;
}

export interface ThemeProps {
  theme: Theme;
}
