import * as React from 'react';
import Box from '@core/components/atoms/Box';
import {
  Form,
  InputField,
  SubmitButton,
} from '@core/components/molecules/Form';
import { useRef } from 'react';
import useTranslation from '@core/hooks/useTranslation';
import SwitchField from '@core/components/molecules/Form/SwitchField';
import { useQuery } from 'react-query';
import * as Yup from 'yup';
import { getSettings } from '../../@core/api/settingApi';
import Button from '../../@core/components/atoms/Button';
import { ISetting } from '../../@core/types';
import { QUERY_KEYS } from '../../@core/constants/consts';
import { FormikProps } from 'formik';
import RadioGroupField from '../../@core/components/molecules/Form/RadioGroupField';
import { IEmailFrequency } from '../../@core/types/setting';
import Typography from '../../@core/components/atoms/Typography';

const GeneralTab = () => {
  const formRef = useRef<FormikProps<any>>(null);
  const { t } = useTranslation();
  const emailFrequencyOptions = [
    { label: t('daily'), value: IEmailFrequency.DAILY },
    { label: t('weekly'), value: IEmailFrequency.WEEKLY },
  ];

  const SettingsSchema = Yup.object().shape({
    emailAddress: Yup.string().email(t('p_e_v_email')).required('Required'),
  });

  const onSubmitHandler = (values: ISetting) => {
    console.log({ values });
  };
  const onCancelHandler = () => {
    formRef.current?.resetForm();
  };

  const {
    isLoading,
    error,
    data: initialValues,
  } = useQuery([QUERY_KEYS.settingsApiData], getSettings);

  if (isLoading) return <Box>Loading...</Box>;

  if (error || !initialValues) return <Box>An error has occurred</Box>;

  return (
    <Box>
      <Form
        ref={formRef}
        onSubmit={onSubmitHandler}
        initialValues={initialValues}
        validationSchema={SettingsSchema}
      >
        <SwitchField
          name="conversationDownloadsEnabled"
          title={t('alow_u_dl_convers')}
          subTitle={t('w_c_only')}
        />
        <SwitchField
          name="conversationClearEnabled"
          title={t('alow_u_clear_convers')}
          subTitle={t('w_c_only')}
        />
        <SwitchField
          name="showLiveChatIcon"
          title={t('show_live_c_in_conv')}
          subTitle={t('w_c_only')}
        />
        <SwitchField
          name="collectUserInfoEnabled"
          title={t('req_u_detail')}
          subTitle={t('name_email_or')}
        />
        <SwitchField
          name="emailEnabled"
          title={t('recive_trans_b_em')}
          subTitle={t('csv_fi_co_a')}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>{t('plz_p_email')}</Typography>
          <InputField label={t('email')} name="emailAddress" />
        </Box>
        <RadioGroupField
          name="emailFrequency"
          title={t('frequency')}
          options={emailFrequencyOptions}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
          }}
        >
          <Button onClick={onCancelHandler} variant="outlined">
            {t('cancel')}
          </Button>
          <SubmitButton>{t('save_changes')}</SubmitButton>
        </Box>
      </Form>
    </Box>
  );
};

export default GeneralTab;
