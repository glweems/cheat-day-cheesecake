import React from 'react';

interface ButtonProps {
  className: string;
  onClick: React.ReactEventHandler;
  children: React.ReactChild | string | React.ReactChildren;
  btn?: boolean;
}

const Button = ({ className, onClick, children, btn }: ButtonProps) => (
  <button
    type="button"
    className={`${!btn || 'btn'} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
