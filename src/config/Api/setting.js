
import { LIST_BOBOT_VERIFIKASI, UPDATE_BOBOT_VERIFIKASI } from './index';
import fetchAPI from '../Axios'

export const getListBobotVerifikasi = async () => {
  const response = await fetchAPI(LIST_BOBOT_VERIFIKASI, 'get')
  return response;
}

export const postBobotVerivikasi = async (data, path) => {
  const response = await fetchAPI(UPDATE_BOBOT_VERIFIKASI, 'post', data, '', path)
  return response;
}
