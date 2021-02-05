
import { REKAP_DATA } from './index';
import fetchAPI from '../Axios'

export const getDataDashboard = async (data) => {
  const response = await fetchAPI(REKAP_DATA, 'get', data)
  return response;
}
