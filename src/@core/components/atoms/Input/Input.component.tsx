import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import TextField from '@mui/material/TextField';

export interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  value: any;
  className?: string;
  name?: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  onBlur,
  onFocus,
  error,
  name,
  label,
}) => {
  return (
    <TextField
      name={name}
      error={error}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      label={label}
      variant="outlined"
    />
  );
};

export default Input;
