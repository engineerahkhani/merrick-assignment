export enum IEmailFrequency {
  WEEKLY,
  DAILY,
}

export interface IConversationTranscripts {
  emailEnabled: boolean;
  emailAddress: string;
  emailFrequency: IEmailFrequency;
}

export interface ISettingApi {
  collectUserInfoEnabled: boolean;
  conversationClearEnabled: boolean;
  conversationDownloadsEnabled: boolean;
  conversationTranscripts: IConversationTranscripts;
  initMessage: boolean;
  showLiveChatIcon: boolean;
}

export interface ISetting {
  collectUserInfoEnabled: boolean;
  conversationClearEnabled: boolean;
  conversationDownloadsEnabled: boolean;
  initMessage: boolean;
  showLiveChatIcon: boolean;
  emailEnabled: boolean;
  emailAddress: string;
  emailFrequency: IEmailFrequency;
}
