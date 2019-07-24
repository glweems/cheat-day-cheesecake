/* eslint-disable @typescript-eslint/no-explicit-any */
// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';
declare module '*.scss';
declare module 'styled-container-component';
declare module '@microlink/react';
declare module 'google-maps-react';

interface NavItem {
  text: string;
  path: string;
}

interface ThemeProps {
  theme: {
    colors: {
      color?: string;
    };
  };
}

interface QueryNode<Type> {
  node: Type;
}

interface Edges<Type> {
  edges: QueryNode<Type>[];
}

interface CheesecakeEventAddress {
  city: string;
  state: string;
  street: string;
  zip: number;
}

interface CheesecakeEvent {
  id?: number;
  title: string;
  date: string;
  address: CheesecakeEventAddress;
}

interface CheesecakeFlavor {
  id?: string;
  flavor: string;
  color?: string;
}

interface CheesecakeMenu {
  id?: number;
  item: string;
  flavors: [];
}

interface GalleryItem {
  src?: string;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  isSelected?: boolean;
  caption?: string;
}

interface IndexPageProps {
  data: {
    allCheesecakeEvent: Edges<CheesecakeEvent>;
    allCheesecakeMenu: Edges<CheesecakeMenu>;
    file: {
      id: string;
      childImageSharp: {
        fluid: any;
      };
    };
  };
}
