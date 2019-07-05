import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    light: '#f2f5f8',
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
body {
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
   }
  a { text-decoration: none;}
`;
