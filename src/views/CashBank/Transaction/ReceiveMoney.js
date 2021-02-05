import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlert from "@material-ui/icons/AddAlert";
import CardHeader from "../../../components/Card/CardHeader.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Snackbar from "../../../components/Snackbar/Snackbar.js";
import { useHistory, useLocation } from "react-router-dom";
import {
  getComplaintProgress,
  postComplaintVerivikasi,
  getInqueryUnitKerja,
  getDataCategory,
  getListEscalationStatus,
  postSubmitEskalasiTo,
  getDataComplaintDetail,
} from "../../../config/Api/complaint";
import { useStoreState } from "easy-peasy";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import { Save, ArrowBackOutlined } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

function ReceiveMoney() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = React.useState({
    isOpen: false,
    typeSubmitOpen: null,
  });
  const [isAlert, setIsAlert] = useState({
    showAlert: false,
    message: "",
  });
  const [responseComplaintProgress, setResponseComplaintProgress] = useState({
    data: null,
    isLoading: true,
  });
  const [
    responseDataComplaintDetail,
    setResponseDataComplaintDetail,
  ] = useState({
    data: null,
    isLoading: true,
  });
  const [responseInqueryUnitKerja, setResponseInqueryUnitKerja] = useState({
    data: null,
    isLoading: true,
  });
  const [complaintVerivikasi, setComplaintVerivikasi] = useState({
    data: null,
    isLoading: true,
  });
  const [responseCategory, setResponseCategory] = useState({
    data: null,
    isLoading: true,
  });
  const [escalationStatus, setEscalationStatus] = useState({
    data: null,
    isLoading: true,
  });
  const [category, setCategory] = React.useState("");
  const [eskalasi, setEskalasi] = React.useState("");
  const [eskalasiStatus, setEskalasiStatus] = React.useState("");
  const [pemutusan, setPemutusan] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [deskripsiEskalasi, setDeskripsiEskalasi] = React.useState("");
  // const {
  //   fromScreen,
  //   complaintID,
  //   nasabahName,
  //   nasabahID,
  //   unitKerjaID,
  //   pegawaiID,
  // } = location.state;
  // const { name, dataUser } = useStoreState((state) => state.createAuth);

  const dataAuth = localStorage.getItem("Auth");
  const result = JSON.parse(dataAuth);
  const { listPemutus } = result.dataUser;

  // useEffect(() => {
  //   async function fetchDataComplaintProgress() {
  //     const { statusHeader, data } = await getComplaintProgress({
  //       params: {
  //         id: complaintID,
  //       },
  //     });

  //     if (statusHeader === 200) {
  //       setResponseComplaintProgress({
  //         ...responseComplaintProgress,
  //         data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   async function fetchDataComplaintDetail() {
  //     const { statusHeader, data } = await getDataComplaintDetail(
  //       "",
  //       complaintID
  //     );

  //     if (statusHeader === 200) {
  //       setResponseDataComplaintDetail({
  //         ...responseDataComplaintDetail,
  //         data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   async function fetchDataInqueryUnitKerja() {
  //     const { statusHeader, data } = await getInqueryUnitKerja("");

  //     if (statusHeader === 200) {
  //       setResponseInqueryUnitKerja({
  //         ...responseInqueryUnitKerja,
  //         data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   async function fetchDataCategory() {
  //     const { statusHeader, data } = await getDataCategory("");

  //     if (statusHeader === 200) {
  //       setResponseCategory({
  //         ...responseCategory,
  //         data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   async function fetchListEscalationStatus() {
  //     const { statusHeader, data } = await getListEscalationStatus("");

  //     if (statusHeader === 200) {
  //       setEscalationStatus({
  //         ...escalationStatus,
  //         data,
  //         isLoading: false,
  //       });
  //     }
  //   }

  //   complaintID &&
  //     responseComplaintProgress.isLoading &&
  //     fetchDataComplaintProgress();
  //   escalationStatus.isLoading && fetchListEscalationStatus();
  //   if (
  //     complaintID &&
  //     (fromScreen === "ListDetailNasabahScreen" ||
  //       fromScreen === "ListComplaintScreen")
  //   ) {
  //     fetchDataComplaintDetail();
  //   } else {
  //     responseInqueryUnitKerja.isLoading && fetchDataInqueryUnitKerja();
  //     responseCategory.isLoading && fetchDataCategory();
  //   }
  // }, [responseComplaintProgress.isLoading]);

  const handleChangeEskalasi = (event) => {
    setEskalasi(event.target.value);
  };

  const handleChangeEskalasiStatus = (event) => {
    setEskalasiStatus(event.target.value);
  };

  const handleChangePemutusan = (event) => {
    setPemutusan(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleBack = () => {
    history.goBack();
  };

  // const handleSubmitComplaintProgress = async () => {
  //   const findIndex = responseCategory?.data?.findIndex(
  //     (value) => value.id === category
  //   );

  //   const dataPayload = {
  //     ip: "0.0.0.0",
  //     username: name,
  //     user_id: dataUser.userID,
  //     category_id: category,
  //     category_name: responseCategory?.data[findIndex]?.name,
  //     detail: deskripsi,
  //     pegawai_id: pegawaiID,
  //     unitkerja_id: unitKerjaID,
  //     escto_unitkerja: eskalasi,
  //     escto_pegawai_id: pemutusan,
  //   };

  //   const { statusHeader, data } = await postComplaintVerivikasi(
  //     dataPayload,
  //     nasabahID
  //   );

  //   if (statusHeader === 200 || statusHeader === 201) {
  //     setComplaintVerivikasi({
  //       ...complaintVerivikasi,
  //       data,
  //       isLoading: false,
  //     });
  //     setIsAlert({
  //       showAlert: true,
  //       message: "Complaint Berhasil di Simpan",
  //     });
  //     history.push({
  //       pathname: "/admin/complaint",
  //     });
  //   }
  // };

  // const handleSubmitEskalasiTo = async () => {
  //   setDeskripsiEskalasi("");
  //   setEskalasiStatus("");
  //   const dataPayload = {
  //     ip: "0.0.0.0",
  //     username: name,
  //     user_id: dataUser.userID,
  //     description: deskripsiEskalasi,
  //     escalation_status: eskalasiStatus,
  //     complaint_id: complaintID,
  //     escto_unitkerja: null,
  //     escto_pegawai_id: null,
  //   };

  //   const { statusHeader } = await postSubmitEskalasiTo(dataPayload);

  //   if (statusHeader === 200) {
  //     setIsAlert({
  //       showAlert: true,
  //       message: "Eskalasi Berhasil di Simpan",
  //     });
  //     setResponseComplaintProgress({
  //       data: null,
  //       isLoading: true,
  //     });
  //   }
  // };

  // const handleClose = () => {
  //   setOpen({
  //     isOpen: false,
  //     typeSubmitOpen: null,
  //   });
  // };

  // const handleApprove = async () => {
  //   const typeSave = open.typeSubmitOpen;
  //   if (typeSave === "submitComplaintProgress") {
  //     handleSubmitComplaintProgress();
  //   } else if (typeSave === "submitEskalasiTo") {
  //     handleSubmitEskalasiTo();
  //   }
  //   setOpen({
  //     isOpen: false,
  //     typeSubmitOpen: null,
  //   });
  // };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Receive Money</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nama Nasabah"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "nasabahName",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                    disabled={responseDataComplaintDetail?.data !== null}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={category}
                      onChange={handleChangeCategory}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {responseCategory?.data?.map((val, index) => {
                        return (
                          <MenuItem key={index} value={val.id}>
                            {val.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>Pilih category</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nama Nasabah"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "nasabahName",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                    disabled={responseDataComplaintDetail?.data !== null}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={category}
                      onChange={handleChangeCategory}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {responseCategory?.data?.map((val, index) => {
                        return (
                          <MenuItem key={index} value={val.id}>
                            {val.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>Pilih category</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nama Nasabah"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "nasabahName",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                    disabled={responseDataComplaintDetail?.data !== null}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={category}
                      onChange={handleChangeCategory}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {responseCategory?.data?.map((val, index) => {
                        return (
                          <MenuItem key={index} value={val.id}>
                            {val.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>Pilih category</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                    disabled={responseDataComplaintDetail?.data !== null}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Eskalasi
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={eskalasi}
                      onChange={handleChangeEskalasi}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {responseInqueryUnitKerja?.data?.map((val, index) => {
                        return (
                          <MenuItem key={index} value={val.idUnit}>
                            {val.namaUnit}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText>Pilih eskalasi</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nama Nasabah"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "nasabahName",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nama Nasabah"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "nasabahName",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={3}>
                  <Button fullWidth color="primary" onClick={() => {}}>
                    Continue
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <Snackbar
        place="tr"
        color="info"
        icon={AddAlert}
        message={isAlert.message}
        open={isAlert.showAlert}
        closeNotification={() =>
          setIsAlert({
            showAlert: false,
            message: "",
          })
        }
        close
      />
      <Dialog
        open={open.isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah anda yakin akan menyimpan data ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Tidak
          </Button>
          <Button onClick={handleApprove} color="primary">
            Ya
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
const styles = () => ({
  formControl: {
    marginTop: "30px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  headerProgress: {
    border: "0",
    borderRadius: "6px",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    textAlign: "center",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
});

export default ReceiveMoney;
