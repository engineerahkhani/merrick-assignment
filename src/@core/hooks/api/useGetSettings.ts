import { useQuery, UseQueryResult } from 'react-query';
import { QUERY_KEYS } from '../../constants/consts';
import { getSettings } from '../../api/settingApi';

const useGetSettings = (): UseQueryResult => {
  const settingsQuery = useQuery([QUERY_KEYS.settingsApiData], getSettings);

  return settingsQuery;
};

export default useGetSettings;
