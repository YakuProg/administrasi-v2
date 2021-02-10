import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddAlert from "@material-ui/icons/AddAlert";
import CardHeader from "../../components/Card/CardHeader.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Snackbar from "../../components/Snackbar/Snackbar.js";
import { useHistory, useLocation } from "react-router-dom";
import {
  getComplaintProgress,
  postComplaintVerivikasi,
  getInqueryUnitKerja,
  getDataCategory,
  getListEscalationStatus,
  postSubmitEskalasiTo,
  getDataComplaintDetail,
} from "../../config/Api/complaint";
import { useStoreState } from "easy-peasy";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import { Save, ArrowBackOutlined } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function ManagementUser() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [akses, setAkses] = React.useState([]);
  const [otoritas, setOtoritas] = React.useState([]);
  const [dashboard, setDashboard] = React.useState([]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Management User</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader>
                      <h4 className={classes.subTitle}>Akses</h4>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="1" />
                          }
                          label="Backup Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="2" />
                          }
                          label="Pengambilan Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="3" />
                          }
                          label="Ubah Kode"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="4" />
                          }
                          label="Data Pengguna"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="5" />
                          }
                          label="Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="6" />
                          }
                          label="Laporan Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="7" />
                          }
                          label="Laporan Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="8" />
                          }
                          label="Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="9" />
                          }
                          label="Pengaturan"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="10" />
                          }
                          label="Pengaturan Lokal"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="11" />
                          }
                          label="Register"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="12" />
                          }
                          label="Efaktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="13" />
                          }
                          label="Perubahan Nomor Faktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setAkses(event.target.value)} value="14" />
                          }
                          label="Ubah Sandi"
                        />
                      </FormGroup>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader>
                      <h4 className={classes.subTitle}>Otorisasi</h4>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="1" />
                          }
                          label="Backup Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="2" />
                          }
                          label="Pengambilan Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="3" />
                          }
                          label="Ubah Kode"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="4" />
                          }
                          label="Data Pengguna"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="5" />
                          }
                          label="Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="6" />
                          }
                          label="Laporan Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="7" />
                          }
                          label="Laporan Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="8" />
                          }
                          label="Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="9" />
                          }
                          label="Pengaturan"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="10" />
                          }
                          label="Pengaturan Lokal"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="11" />
                          }
                          label="Register"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="12" />
                          }
                          label="Efaktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="13" />
                          }
                          label="Perubahan Nomor Faktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setOtoritas(event.target.value)} value="14" />
                          }
                          label="Ubah Sandi"
                        />
                      </FormGroup>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader>
                      <h4 className={classes.subTitle}>Dashboard</h4>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="1" />
                          }
                          label="Backup Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="2" />
                          }
                          label="Pengambilan Database"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="3" />
                          }
                          label="Ubah Kode"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="4" />
                          }
                          label="Data Pengguna"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="5" />
                          }
                          label="Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="6" />
                          }
                          label="Laporan Pembatalan Transaksi"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="7" />
                          }
                          label="Laporan Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="8" />
                          }
                          label="Pemetaan Buku Besar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="9" />
                          }
                          label="Pengaturan"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="10" />
                          }
                          label="Pengaturan Lokal"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="11" />
                          }
                          label="Register"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="12" />
                          }
                          label="Efaktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="13" />
                          }
                          label="Perubahan Nomor Faktur"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox onChange={(event) => setDashboard(event.target.value)} value="14" />
                          }
                          label="Ubah Sandi"
                        />
                      </FormGroup>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
const styles = () => ({
  formControl: {
    marginTop: "30px",
  },
  formPadding: {
    paddingTop: "30px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  subTitle: {
    fontWeight: '400'
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
  buttonRight: {
    float: 'right'
  },
  cardTitleBlack: {
    color: "#000000",
    fontWeight: "500",
    fontSize: "23px",
    fontFamily: "'Roboto'",
    textDecoration: "none",
    textAlign: "left",
  },
  marginBottom: {
    marginTop: 30
  },
});

export default ManagementUser;
