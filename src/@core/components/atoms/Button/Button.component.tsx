import React from 'react';
import ButtonComponent from '@mui/material/Button';

export interface ButtonProps {
  children: any;
  variant?: 'contained' | 'outlined';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'contained',
  disabled,
}) => {
  return (
    <ButtonComponent disabled={disabled} onClick={onClick} variant={variant}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
