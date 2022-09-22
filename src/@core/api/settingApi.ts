import request from '../utils/request';
import END_POINTS from '../constants/endpoints';
import { ISettingApi } from '../types';
import normalizers from './normalizers';

const getSettings = async () => {
  const url = END_POINTS.settings;
  const { data } = await request.get<ISettingApi>(url);

  return normalizers.getSettingNormalizer(data);
};

export { getSettings };
