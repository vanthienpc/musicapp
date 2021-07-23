import React from 'react';
import { Input } from 'antd';
import { Dispatch } from 'redux';
import debounce from 'lodash/debounce';
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

  const emitChange = (value: string): void => {
    value && dispatch(MusicVideoAction.fetchMusicVideoRequest(value));
  };

  const emitChangeDebounced = debounce(emitChange, 250);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    emitChangeDebounced(e.target.value);
  };

  return <SearchField placeholder="Search your entertainment..." onChange={handleChange} />;
};

export default SearchBox;
