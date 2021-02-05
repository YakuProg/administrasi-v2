export const IS_DEV = true;

const WEBDEV      = 'http://103.129.221.213:3005';
const WEBPROD  = 'http://103.129.221.213:3005';
const WEBWWW      = IS_DEV ? WEBDEV : WEBPROD;

export const SIGNIN = `${WEBWWW}/api/sign-in`;

// dashboard
export const REKAP_DATA = `${WEBWWW}/api/listDashboard`;

// complaint
export const LIST_COMPLAINT_DATA = `${WEBWWW}/api/complaint`;
export const COMPLAINT_PROGRESS = `${WEBWWW}/api/complaint/progress`;
export const INQUERY_UNIT_KERJA = `${WEBWWW}/api/inquiry/unitkerja`;
export const COMPLAINT_VERIVIKASI = `${WEBWWW}/api/complaint/save`;
export const DATA_CATEGORY = `${WEBWWW}/api/category`;
export const DATA_COMPLAINT_DETAIL =  `${WEBWWW}/api/complaint/detail`;

// export const LIST_COMPLAINT_DATA = `${WEBWWW}/api/complaint?page=$page`;
// export const COMPLAINT_PROGRESS = `${WEBWWW}/api/complaint/progress?id=$id`;
// export const COMPLAINT_VERIVIKASI = `${WEBWWW}/api/complaint/simpan/$id`;
// export const INQUERY_UNIT_KERJA = `${WEBWWW}/api/inquiry/unitkerja/$id`;

// Inquery Verivication Customer
export const LIST_INQUERY_CIF_CUSTOMER = `${WEBWWW}/api/inquiryCIF`;
export const INQUERY_CIF_VERIVICATION_CUSTOMER = `${WEBWWW}/api/inquiryCIF/verify`;
export const LIST_INQUERY_CIF_BY_ACCOUNT = `${WEBWWW}/api/inquiryCIFByAccount`;
export const INQUERY_CIF_BY_ACCOUNT_VERIVICATION = `${WEBWWW}/api/inquiryCIFByAccount/verify`;

// Nasabah
export const LIST_COSTUMER = `${WEBWWW}/api/nasabah/list`;
export const COSTUMER_DETAIL = `${WEBWWW}/api/nasabah/detail`;
export const LIST_COSTUMER_COMPLAINT =  `${WEBWWW}/api/nasabah/complaint`;
export const CHECK_DATA_MUTASI =  `${WEBWWW}/api/mutasi`;

// FollowUp
export const LIST_FOLLOW_UP = `${WEBWWW}/api/followup`;
export const SUBMIT_DEPOSIT_TO = `${WEBWWW}/api/disposisi/save`;

// Request Approval
export const LIST_REQUEST_APPROVAL = `${WEBWWW}/api/approve`;
export const SUBMIT_REQUEST_APPROVED = `${WEBWWW}/api/approve/save`;
export const SUBMIT_REJECT = `${WEBWWW}/api/reject/save`;

// Eskalasi
export const LIST_ESCALATION_STATUS = `${WEBWWW}/api/status/escalation`;
export const SUBMIT_ESKALASI_TO = `${WEBWWW}/api/escalation/to`;

// Setting
export const LIST_BOBOT_VERIFIKASI = `${WEBWWW}/api/list/setting`;
export const UPDATE_BOBOT_VERIFIKASI = `${WEBWWW}/api/update/setting`;
