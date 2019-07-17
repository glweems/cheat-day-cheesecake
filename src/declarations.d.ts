// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';
declare module 'react-social-icons';
declare module 'styled-container-component';
declare module '@microlink/react';
declare module 'google-maps-react';
interface MenuItem {
  name: string;
  flavors: string[];
}
interface ThemeProps {
  theme: {
    colors: {
      color?: string;
    };
  };
}

interface Query<Type> {
  edges: QueryNode<Type>[];
}

interface QueryNode<Type> {
  node: Type;
}

interface CheesecakeEvent {
  id: number;
  title: string;
  date: string;
  street: string;
  address: {
    city: string;
    street: string;
    state: string;
    zip: number;
  };
}
