import { AxiosResponse } from 'axios';
import environment from 'environment';
import HttpUtility from 'utilities/HttpUtility';
import ErrorResponseModel from 'models/ErrorResponseModel';
import MusicVideoState from './models/MusicVideoState';

export const fetchMusicVideo = async (
  payload: string,
): Promise<MusicVideoState | ErrorResponseModel> => {
  const endpoint = `${environment.api.search}?term=${payload}&entity=musicVideo`;
  const response: AxiosResponse | ErrorResponseModel = await HttpUtility.get(endpoint);

  if (response instanceof ErrorResponseModel) {
    return response;
  }

  return response.data;
};
