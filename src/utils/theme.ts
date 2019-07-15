import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    light: '#F4EFD7',
    red: '#d83131',
    dark: '#303030',
    grey: '#454545',
    blue: '#035985',
    yellow: '#ffba29',
  },
  fontFamily: 'Cabin Condensed',
};

export const Container = styled.div`
  padding: 1rem;
`;

export const GlobalStyle = createGlobalStyle`
html {
    max-width: 100%;
    overflow: hidden;
}
body {
    width: 100%;
    color: ${theme.colors.dark};
    background: ${theme.colors.light};
   }
  a { text-decoration: none;}
`;
