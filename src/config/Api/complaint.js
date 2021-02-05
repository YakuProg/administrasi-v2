
import { LIST_COMPLAINT_DATA, COMPLAINT_PROGRESS, COMPLAINT_VERIVIKASI, INQUERY_UNIT_KERJA, DATA_CATEGORY, LIST_ESCALATION_STATUS, SUBMIT_ESKALASI_TO, DATA_COMPLAINT_DETAIL } from './index';
import fetchAPI from '../Axios'

export const getListComplaintData = async (data) => {
  const response = await fetchAPI(LIST_COMPLAINT_DATA, 'get', data)
  return response;
}

export const getDataComplaintDetail = async (data, path) => {
  const response = await fetchAPI(DATA_COMPLAINT_DETAIL, 'get', data, '', path)
  return response;
}

export const getComplaintProgress = async (data) => {
  const response = await fetchAPI(COMPLAINT_PROGRESS, 'get', data)
  return response;
}

export const postComplaintVerivikasi = async (data, path) => {
  const response = await fetchAPI(COMPLAINT_VERIVIKASI, 'post', data, '', path)
  return response;
}

export const getInqueryUnitKerja = async (data, path) => {
  const response = await fetchAPI(INQUERY_UNIT_KERJA, 'get', data, '', path)
  return response;
}

export const getDataCategory = async (data) => {
  const response = await fetchAPI(DATA_CATEGORY, 'get', data)
  return response;
}

export const getListEscalationStatus = async (data) => {
  const response = await fetchAPI(LIST_ESCALATION_STATUS, 'get', data)
  return response;
}

export const postSubmitEskalasiTo = async (data) => {
  const response = await fetchAPI(SUBMIT_ESKALASI_TO, 'post', data)
  return response;
}
