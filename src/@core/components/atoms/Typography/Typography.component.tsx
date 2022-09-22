import React from 'react';
import TypographyComponent, { TypographyProps } from '@mui/material/Typography';

const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => {
  return <TypographyComponent {...rest}>{children}</TypographyComponent>;
};

export default Typography;
