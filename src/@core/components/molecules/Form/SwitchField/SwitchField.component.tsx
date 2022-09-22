import React from 'react';
import { Field, FieldProps } from 'formik';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Box from '../../../atoms/Box';
import Typography from '../../../atoms/Typography';

interface SwitchFieldProps extends SwitchProps {
  name: string;
  title: string;
  subTitle: string;
}

const SwitchField: React.FC<SwitchFieldProps> = ({ title, name, subTitle }) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <Box sx={{ display: 'flex', marginTop: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: 'blank', fontsize: 18 }}>
                  {title}
                </Typography>
                <Typography sx={{ color: 'gray', fontSize: 12 }}>
                  {subTitle}
                </Typography>
              </Box>
              <Switch
                defaultChecked={field.value}
                checked={field.value}
                {...field}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>

            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </Box>
        );
      }}
    </Field>
  );
};

export default SwitchField;
