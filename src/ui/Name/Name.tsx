import React, { FC } from 'react';

export interface NameProps {
  name?: string;
}

export const Name: FC<NameProps> = props => {
  const { name } = props;

  return (
    <div style={{background: "red"}}>
      {name}
    </div>
  );
};




