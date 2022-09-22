import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Settings from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
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
import { getSettings } from '../../@core/api/settingApi';
import Button from '../../@core/components/atoms/Button';
import { ISetting } from '../../@core/types';
import { QUERY_KEYS } from '../../@core/constants/consts';
import { FormikProps } from 'formik';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const SettingPage = () => {
  const formRef = useRef<FormikProps<any>>(null);
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const onSubmitHandler = (values: ISetting) => {
    console.log({ values });
  };
  const onCancelHandler = () => {
    formRef.current?.resetForm();
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    isLoading,
    error,
    data: initialValues,
  } = useQuery([QUERY_KEYS.settingsApiData], getSettings);

  if (isLoading) return <Box>Loading...</Box>;

  if (error || !initialValues) return <Box>An error has occurred</Box>;

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab icon={<Settings />} iconPosition="start" label={t('general')} />
        <Tab
          icon={<PhoneMissedIcon />}
          iconPosition="start"
          label={t('tak_offline')}
        />
        <Tab
          icon={<FavoriteIcon />}
          iconPosition="start"
          label={t('block_users')}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Form
            ref={formRef}
            onSubmit={onSubmitHandler}
            initialValues={initialValues}
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
            <InputField label={t('email')} name="emailAddress" />

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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default SettingPage;
