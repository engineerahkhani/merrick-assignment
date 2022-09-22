import { ISetting, ISettingApi } from '../types';

const getSettingNormalizer = ({
  conversationTranscripts,
  ...rest
}: ISettingApi): ISetting => ({
  ...rest,
  ...conversationTranscripts,
});

export default { getSettingNormalizer };
