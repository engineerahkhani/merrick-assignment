import * as React from 'react';
import Settings from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import Box from '@core/components/atoms/Box';
import useTranslation from '@core/hooks/useTranslation';
import TabPanel from '@core/components/molecules/TabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GeneralTab from './SettingPage.generalTab';
import useGetSettings from '../../@core/hooks/api/useGetSettings';

const SettingPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { isLoading, error, data: initialValues } = useGetSettings();

  if (isLoading) return <Box>{t('loading_3dot')}</Box>;

  if (error || !initialValues) return <Box>{t('er_has_occ')}</Box>;

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
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
        <GeneralTab />
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
