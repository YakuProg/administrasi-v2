
import { LIST_INQUERY_CIF_CUSTOMER, INQUERY_CIF_VERIVICATION_CUSTOMER, LIST_INQUERY_CIF_BY_ACCOUNT, INQUERY_CIF_BY_ACCOUNT_VERIVICATION } from './index';
import fetchAPI from '../Axios';

export const postInqueryCIF = async (data) => {
  // const dataAuth = localStorage.getItem('Auth');
  // const dataParse = JSON.parse(dataAuth);

  // const headers = {
  //   Authorization: `Bearer ${dataParse.token}`
  // };

  // const response = await fetchAPI(LIST_INQUERY_CIF_CUSTOMER, 'post', data, headers)
  const response = await fetchAPI(LIST_INQUERY_CIF_CUSTOMER, 'post', data)
  return response;
}

export const postInqueryCIFVerivikasi = async (data) => {
  // const dataAuth = localStorage.getItem('Auth')
  // const dataParse = JSON.parse(dataAuth);

  // const headers = {
  //   Authorization: `Bearer ${dataParse.token}`
  // };

  // const response = await fetchAPI(INQUERY_CIF_VERIVICATION_CUSTOMER, 'post', data, headers)
  const response = await fetchAPI(INQUERY_CIF_VERIVICATION_CUSTOMER, 'post', data)
  return response;
}

export const postInqueryCIFByAccount = async (data) => {
  // const datauth = localStorage.getItem('Auth');
  // const dataParse = JSON.parse(datauth);

  // const headers = {
  //   Authorization: `Bearer ${dataParse.token}`
  // };

  // const response = await fetchAPI(LIST_INQUERY_CIF_BY_ACCOUNT, 'post', data, headers)
  const response = await fetchAPI(LIST_INQUERY_CIF_BY_ACCOUNT, 'post', data)
  return response;
}

export const postInqueryCIFByAccountVerivikasi = async (data) => {
  // const datauth = localStorage.getItem('Auth');
  // const dataParse = JSON.parse(datauth);

  // const headers = {
  //   Authorization: `Bearer ${dataParse.token}`
  // };

  // const response = await fetchAPI(INQUERY_CIF_BY_ACCOUNT_VERIVICATION, 'post', data, headers, path)
  const response = await fetchAPI(INQUERY_CIF_BY_ACCOUNT_VERIVICATION, 'post', data)
  return response;
}
