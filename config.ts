import { slate, slateDark, indigo, indigoDark } from '@radix-ui/colors';

export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const theme = {
  colors: {
    ...slate,
    ...indigo,
  },
};

export const darkTheme = {
  colors: {
    ...slateDark,
    ...indigoDark,
  },
};

export interface ThemeProps {
  theme: {
    colors: Record<string, Record<string, string>>;
  };
}
