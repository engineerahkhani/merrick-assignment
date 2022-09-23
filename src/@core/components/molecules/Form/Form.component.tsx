import React from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';

interface FormProps {
  children?: any;
  initialValues: FormikValues;
  validationSchema?: any;
  validate?: () => any;
  onSubmit: any;
  className?: string;
  ref?: any;
}

const Form: React.FC<FormProps> = React.forwardRef(
  (
    {
      children,
      initialValues,
      validate,
      onSubmit,
      className,
      validationSchema,
    },
    formRef
  ) => {
    return (
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // @ts-ignore
        innerRef={formRef}
      >
        <FormikForm className={className}>{children}</FormikForm>
      </Formik>
    );
  }
);

export default Form;
