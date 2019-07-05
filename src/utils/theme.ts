import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    light: '#f2f5f8',
    red: '#d83131',
    dark: '#303030',
    grey: '#454545',
    blue: '#035985',
    yellow: '#ffba29',
  },
};

export const GlobalStyle = createGlobalStyle`
  body { background: ${theme.colors.dark}; }
`;
