import { createSelector } from 'reselect';
import StoreModel from 'models/StoreModel';
import MusicVideoState from 'stores/musicVideo/models/MusicVideoState';
import { result } from 'lodash';
import { ParametrizedSelector, proxyParam } from 'utilities/HookUtility';
import { MusicVideoModel } from 'stores/musicVideo/models/MusicVideoModel';

const musicVideoSelector = (state: StoreModel): MusicVideoState => state.musicVideo;

export const filterGenre = createSelector(musicVideoSelector, (musicVideo) => {
  const { results } = musicVideo;
  if (results && results.length > 0) {
    return results
      .map((result) => result.primaryGenreName)
      .reduce((acc: (string | number)[], cur: string | number) => {
        if (acc.find((item: string | number) => item === cur)) {
          return acc;
        }
        return [...acc, cur];
      }, []);
  }
  return [];
});

export const resultCount = createSelector(
  musicVideoSelector,
  (musicVideo) => musicVideo.resultCount,
);

export const results = createSelector(musicVideoSelector, (musicVideo) => {
  const { results } = musicVideo;
  if (results && result.length > 0) {
    return results;
  }
  return [];
});

export const resultsFilter = (): ParametrizedSelector<string | number, MusicVideoModel[]> =>
  createSelector(proxyParam, results, (genre, results) => {
    const dataFilter = results.filter((result) => result.primaryGenreName === genre);
    if (dataFilter.length > 0) {
      return dataFilter;
    }
    return results;
  });
