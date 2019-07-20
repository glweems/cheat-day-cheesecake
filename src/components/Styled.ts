import styled from 'styled-components';

interface ThemeProps {
  colors?: {
    brand: string;
    light: string;
    red: string;
    dark: string;
    grey: string;
    blue: string;
    yellow: string;
  };
}

interface FlexProps extends ThemeProps {
  column?: boolean;
  alignItems?: string;
  justifyContent?: string;
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => (props.column ? 'column' : 'row')};
  align-items: ${(props: FlexProps) =>
    props.alignItems ? props.alignItems : 'center'};
  justify-content: ${(props: FlexProps) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  width: 100%;
  margin: 0;
  padding: 0;
`;

interface GridProps extends ThemeProps {
  rows?: string;
  columns?: string;
  gap?: string;
}

export const Grid = styled.div`
  display: grid;
  grid-template-rows: ${(props: GridProps) => props.rows};
  grid-template-columns: ${(props: GridProps) => props.columns};
  gap: ${(props: GridProps) => props.gap};
  align-content: flex-end;
  align-items: center;
`;

interface GridItemProps {
  textAlign?: string;
}
export const GridItem = styled.div`
  text-align: ${(props: GridItemProps) => props.textAlign};
`;
