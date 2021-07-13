import React from 'react';
import { Input } from 'antd';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import IStore from 'models/StoreModel';
import { useDispatch, useSelector } from 'utilities/HookUtility';
import { selectRequest } from 'selectors/RequestSelector';
import * as MusicVideoAction from 'stores/musicVideo/MusicVideoAction';
import * as MusicVideoType from 'stores/musicVideo/MusicVideoType';
import SearchIcon from 'assets/search.svg';

const SearchField = styled(Input).attrs(() => ({
  size: 'large',
  bordered: false,
  prefix: <img src={SearchIcon} width="24" alt="" />,
}))``;

const SearchBox: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const isRequest: boolean = useSelector((state: IStore) =>
    selectRequest(state, [MusicVideoType.FETCH_MUSIC_VIDEO_REQUEST]),
  );

  const onSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    value && dispatch(MusicVideoAction.fetchMusicVideoRequest(value));
  };

  return <SearchField placeholder="Search your entertainment..." onPressEnter={onSearch} />;
};

export default SearchBox;
