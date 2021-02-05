
import { LIST_REQUEST_APPROVAL, SUBMIT_REQUEST_APPROVED, SUBMIT_REJECT } from './index';
import fetchAPI from '../Axios'

export const getListRequestApprove = async (data) => {
  const response = await fetchAPI(LIST_REQUEST_APPROVAL, 'get', data)
  return response;
}

export const postSubmitRequestApprove = async (data, path) => {
  const response = await fetchAPI(SUBMIT_REQUEST_APPROVED, 'post', data, '', path)
  return response;
}

export const postSubmitReject = async (data, path) => {
  const response = await fetchAPI(SUBMIT_REJECT, 'post', data, '', path)
  return response;
}
