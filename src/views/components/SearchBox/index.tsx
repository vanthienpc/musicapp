import React from 'react';
import { Input } from 'antd';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { useDispatch } from 'utilities/HookUtility';
import * as MusicVideoAction from 'stores/musicVideo/MusicVideoAction';
import SearchIcon from 'assets/search.svg';

const SearchField = styled(Input).attrs(() => ({
  size: 'large',
  bordered: false,
  prefix: <img src={SearchIcon} width="24" alt="" />,
}))``;

const SearchBox: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const onSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    value && dispatch(MusicVideoAction.fetchMusicVideoRequest(value));
  };

  return <SearchField placeholder="Search your entertainment..." onPressEnter={onSearch} />;
};

export default SearchBox;
