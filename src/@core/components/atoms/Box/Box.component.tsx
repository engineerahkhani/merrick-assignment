import * as React from 'react';
import BoxComponent, { BoxProps } from '@mui/material/Box';

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <BoxComponent component="span" {...rest}>
      {children}
    </BoxComponent>
  );
};

export default Box;
