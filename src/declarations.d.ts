// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';
declare module 'react-social-icons';
declare module 'react-parallax';
declare module 'typography-theme-kirkham';
declare module 'styled-container-component';
declare module '@microlink/react';
declare module 'google-maps-react';

interface NavItem {
  text: string;
  path: string;
}

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

interface Address {
  city: string;
  state: string;
  street: string;
  zip: number;
}

interface CheesecakeNode {
  id: string;
  title: string;
  date: string;
  address: Address;
}

interface AllCheesecakeEvent {
  edges: Edge<Node>[];
}

interface RootObject {
  allCheesecakeEvent: AllCheesecakeEvent;
}

interface Fluid {
  src: string;
}

interface ChildImageSharp {
  fluid: [];
}

interface Node {
  childImageSharp: ChildImageSharp;
}

interface Edge<Type> {
  node: Type;
}

interface AllFile<Type> {
  edges: Edge<Type>;
}

interface Query<Type> {
  node: Type;
  edges: {
    node: Type;
  };
}

interface Data {
  allFile: AllFile;
  allCheesecakeEvent: AllCheesecakeEvent;
}

interface RootObject {
  data: Data;
}
