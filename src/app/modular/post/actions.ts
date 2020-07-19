import { action } from 'typesafe-actions';

export const LOADING_START = 'post/loadingStart';
export const LOADING_SUCCESS = 'post/loadingSuccess';
export const LOADING_ERROR = 'post/loadingError';

export const loadingStart = () => action(LOADING_START);

export const loadingError = () => action(LOADING_ERROR);

export const loadingSuccess = () => action(LOADING_SUCCESS);
