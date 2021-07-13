import React from 'react';
import { Result } from 'antd';
import StoreModel from 'models/StoreModel';
import { useSelector } from 'utilities/HookUtility';
import * as ErrorSelector from 'selectors/ErrorSelector';
import * as MusicVideoType from 'stores/musicVideo/MusicVideoType';

const ErrorBox: React.FC = () => {
  const requestErrorText = useSelector((state: StoreModel) =>
    ErrorSelector.selectErrorText(state, [MusicVideoType.FETCH_MUSIC_VIDEO_FINISHED]),
  );

  if (requestErrorText) {
    return <Result status="warning" title={requestErrorText} />;
  }

  return null;
};

export default ErrorBox;
