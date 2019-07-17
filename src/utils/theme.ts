import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    brand: '#D9534F',
    light: '#f8f9fa',
    bg: '#ffffff',
    red: '#D9534F',
    dark: '#212529',
    grey: '#454545',
    blue: '#035985',
    yellow: '#ffba29',
  },
};

export const Container = styled.div`
  padding: 1rem;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    width: 100%;
    color: ${theme.colors.dark};
    background: ${theme.colors.bg};
  }
  a {
    text-decoration: none;
  }
`;
