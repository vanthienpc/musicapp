import React from 'react';
import { PageHeader, Row, Col } from 'antd';
import styled from 'styled-components';
import { useParamSelector, useSelector } from 'utilities/HookUtility';
import * as MusicVideoSelector from 'selectors/MusicVideoSelector';

const Container = styled(PageHeader).attrs(() => ({
  backIcon: false,
}))``;

const ResultList = styled(Row).attrs(() => ({
  gutter: [30, 30],
}))``;

const ResultItem = styled(Col).attrs(() => ({
  xs: 8,
  sm: 6,
  md: 4,
  lg: 3,
}))``;

const ResultItemPoster = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ResultItemMeta = styled.div`
  padding: 10px 0;
  strong,
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  strong {
    font-size: 18px;
  }
  span {
    font-size: 14px;
    color: #969696;
  }
`;

type ResultsProps = {
  filterValue: string | number;
};

function Results({ filterValue }: ResultsProps): React.ReactElement {
  const resultCount = useSelector(MusicVideoSelector.resultCount);
  const results = useParamSelector(MusicVideoSelector.resultsFilter, filterValue);

  if (!resultCount && !results.length) {
    return <React.Fragment />;
  }

  return (
    <Container title={`Results(${results.length})`}>
      <ResultList>
        {results.map((result) => (
          <ResultItem key={result.trackId}>
            <ResultItemPoster>
              <img src={`${result.artworkUrl100}`} alt="" />
            </ResultItemPoster>
            <ResultItemMeta>
              <strong>{result.trackName}</strong>
              <span>{result.artistName}</span>
            </ResultItemMeta>
          </ResultItem>
        ))}
      </ResultList>
    </Container>
  );
}

export default Results;
