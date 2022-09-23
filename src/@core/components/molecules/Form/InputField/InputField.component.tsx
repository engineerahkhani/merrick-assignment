import React from 'react';
import { Field, FieldProps } from 'formik';
import Input from '../../../atoms/Input';
import { InputProps } from '../../../atoms/Input/Input.component';
import Typography from '../../../atoms/Typography';

interface InputFieldProps extends Partial<InputProps> {
  name: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ onChange, name, label }) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const onChangeHandler = (e: any) => {
          field.onChange(e);
          onChange?.(e);
        };
        return (
          <div>
            <Input
              {...field}
              label={label}
              onChange={onChangeHandler}
              error={!!meta.error}
            />
            {meta.touched && meta.error && (
              <Typography color="error" sx={{ fontSize: 12 }}>
                {meta.error}
              </Typography>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default InputField;
