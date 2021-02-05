
import { LIST_FOLLOW_UP, SUBMIT_DEPOSIT_TO } from './index';
import fetchAPI from '../Axios'

export const getListFollowUp = async (data) => {
  const response = await fetchAPI(LIST_FOLLOW_UP, 'get', data)
  return response;
}

export const postSubmitFollowUp = async (data, path) => {
  const response = await fetchAPI(SUBMIT_DEPOSIT_TO, 'post', data, '', path)
  return response;
}
