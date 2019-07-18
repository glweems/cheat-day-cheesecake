import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from '../Store';
import { theme, GlobalStyle } from '../utils/theme';
import Layout from './Layout';

const navItems: NavItem[] = [{ text: 'Home', path: '/' }];

export default function WrapRootElement({ children }: { children: ReactNode }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          languageCode
          countryCode
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <>
            <Helmet
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              defaultTitle={data.site.siteMetadata.title}
            >
              <html lang={data.site.siteMetadata.languageCode} />
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />

              <meta
                property="og:locale"
                content={`${data.site.siteMetadata.languageCode}_${data.site.siteMetadata.countryCode}`}
              />
            </Helmet>
            <Layout navItems={navItems}>{children}</Layout>
          </>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
