import React, { FC } from 'react';

export interface ButtonProps {
  className?: string;
}

export const Button: FC<ButtonProps> = props => {
  const { className } = props;

  return (
    <button style={{background: "red"}} className={className}>
      red
    </button>
  );
};




