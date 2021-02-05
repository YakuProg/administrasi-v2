
import { LIST_COSTUMER, COSTUMER_DETAIL, LIST_COSTUMER_COMPLAINT, CHECK_DATA_MUTASI } from './index';
import fetchAPI from '../Axios'

export const getListCostumer = async (data) => {
  const response = await fetchAPI(LIST_COSTUMER, 'get', data)
  return response;
}

export const getCostumerDetail = async (data, path) => {
  const response = await fetchAPI(COSTUMER_DETAIL, 'get', data, '', path)
  return response;
}

export const getListCostumerComplaint = async (data, path) => {
  const response = await fetchAPI(LIST_COSTUMER_COMPLAINT, 'get', data, '', path)
  return response;
}

export const postCheckMutasi = async (data) => {
  const response = await fetchAPI(CHECK_DATA_MUTASI, 'post', data)
  return response;
}
