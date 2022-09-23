import React from 'react';
import { Field, FieldProps } from 'formik';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioGroupItem {
  label: string;
  value: string | number;
}

interface RadioGroupFieldProps extends RadioProps {
  name: string;
  title: string;
  options: Array<RadioGroupItem>;
}

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  title,
  name,
  options,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <FormControl
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              {title}
            </FormLabel>
            <RadioGroup
              sx={{ marginLeft: 'auto' }}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              {...field}
            >
              {options.map(({ label, value }) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                />
              ))}
            </RadioGroup>
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </FormControl>
        );
      }}
    </Field>
  );
};

export default RadioGroupField;
