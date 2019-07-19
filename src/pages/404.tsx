import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <h1>Page not found</h1>
      <p>The requested page is unavailable.</p>
    </>
  );
}
