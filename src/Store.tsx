import React, { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface Store {
  state: {};
}

const initialState = {};

export const Store = createContext(initialState);

function reducer(state: {}, action: Function) {
  switch (action.type) {
    default:
      return state;
  }
}

export function StoreProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
