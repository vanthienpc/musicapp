import React from 'react';
import { PageHeader, Button } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'utilities/HookUtility';
import * as MusicVideoSelector from 'selectors/MusicVideoSelector';

const Container = styled(PageHeader).attrs(() => ({
  backIcon: false,
}))``;

const FilterList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

const FilteItem = styled(Button).attrs(() => ({
  size: 'large',
}))`
  border-radius: 8px;
  &:focus,
  &:hover,
  &:active {
    color: #ffffff;
    border-color: #2f904f;
    background-color: #2f904f;
  }
`;

type FilterGenreProps = {
  handleOnClick: (arg: string | number) => void;
};

function FilterGenre({ handleOnClick }: FilterGenreProps): React.ReactElement {
  const filterGenre = useSelector(MusicVideoSelector.filterGenre);

  if (!filterGenre.length) {
    return <React.Fragment />;
  }

  return (
    <Container title="Filter Genre">
      <FilterList>
        {filterGenre.map((genre, index) => (
          <FilteItem
            key={index}
            onClick={(): void => {
              handleOnClick(genre);
            }}
          >
            {genre}
          </FilteItem>
        ))}
      </FilterList>
    </Container>
  );
}

export default FilterGenre;
