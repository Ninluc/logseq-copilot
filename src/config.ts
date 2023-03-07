import Browser from 'webextension-polyfill';

export type LogseqCopliotConfig = {
  logseqHost: string;
  logseqAuthToken: string;
  enableQuickCapture: boolean;
};

export const getLogseqCopliotConfig =
  async (): Promise<LogseqCopliotConfig> => {
    const {
      logseqHost = 'http://localhost:12315',
      logseqAuthToken = '',
      enableQuickCapture = true,
    } = await Browser.storage.local.get();
    return {
      logseqHost,
      logseqAuthToken,
      enableQuickCapture,
    };
  };

export const saveLogseqCopliotConfig = async (
  updates: Partial<LogseqCopliotConfig>,
) => {
  console.log('saveLogseqCopliotConfig', updates);
  await Browser.storage.local.set(updates);
};
