
import { SIGNIN } from './index';
import fetchAPI from '../Axios'


export const postSignin = async (data) => {
  const response = await fetchAPI(SIGNIN, 'post', data)
  return response;
}