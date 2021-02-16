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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';

function Expenses() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [nik, setNik] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");
  const [tempatLahir, setTempatLahir] = React.useState("");
  const [tanggalLahir, setTanggalLahir] = React.useState("");
  const [alamat, setAlamat] = React.useState("");
  const [agama, setAgama] = React.useState("");
  const [statusKawin, setStatusKawin] = React.useState("");
  const [pekerjaan, setPekerjaan] = React.useState("");
  const [npwp, setNpwp] = React.useState("");
  const [namaBank, setNamaBank] = React.useState("");
  const [noRek, setNoRek] = React.useState("");
  const [namaRek, setNamaRek] = React.useState("");
  const [contactType, setContactType] = React.useState("");
  const [AccountType, setAccountType] = React.useState("");
  const [fileScan, setFileScan] = React.useState("");
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Contacts</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4 className={classes.cardTitleBlack}>Biodata</h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="NIK"
                    id="nik"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setNik(event.target.value)
                    }}
                    value={nik}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nama"
                    id="nama"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setNama(event.target.value)
                    }}
                    value={nama}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Jenis Kelamin
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={jenisKelamin}
                      onChange={(event) => setJenisKelamin(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="l">
                        <em>Laki-laki</em>
                      </MenuItem>
                      <MenuItem value="p">
                        <em>Perempuan</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Jenis Kelamin</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Tempat Lahir"
                    id="tempatLahir"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setTempatLahir(event.target.value)
                    }}
                    value={tempatLahir}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth>
                    <TextField
                      id="tanggalLahir"
                      label="Tanggal Lahir"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.formControl}
                      value={tanggalLahir}
                      onChange={(event) => setTanggalLahir(event.target.value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Agama"
                    id="agama"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setAgama(event.target.value)
                    }}
                    value={agama}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl fullWidth={true}>
                    <TextField
                      id="alamat"
                      label="Alamat"
                      multiline
                      rows={3}
                      variant="outlined"
                      value={alamat}
                      onChange={(event) => setAlamat(event.target.value)}
                      className={classes.formControl}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Status Perkawinan
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={statusKawin}
                      onChange={(event) => setStatusKawin(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Menikah</em>
                      </MenuItem>
                      <MenuItem value="2">
                        <em>Belum Menikah</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Status Perkawinan</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Pekerjaan"
                    id="pekerjaan"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setPekerjaan(event.target.value)
                    }}
                    value={pekerjaan}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} >
                  <CustomInput
                    labelText="NPWP"
                    id="npwp"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setNpwp(event.target.value)
                    }}
                    value={npwp}
                  />
                </GridItem>
              </GridContainer>
              <Divider className={classes.marginBottom}/>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4 className={classes.cardTitleBlack}>Bank Accounts</h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Nama Bank
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={namaBank}
                      onChange={(event) => setNamaBank(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>BRI</em>
                      </MenuItem>
                      <MenuItem value="2">
                        <em>BCA</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Nama Bank</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nomor Rekening"
                    id="nomorRekening"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setNoRek(event.target.value)
                    }}
                    value={noRek}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Nama Rekening"
                    id="namaRekening"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setNamaRek(event.target.value)
                    }}
                    value={namaRek}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={1} sm={1} md={1}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Contacts Type</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={1} sm={1} md={1}>
                  <FormHelperText className={classes.formControl}>Customer</FormHelperText>
                  <Checkbox
                    value={"Customer"}
                    onChange={(event) => setContactType(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>
                <GridItem xs={1} sm={1} md={1}>
                  <FormHelperText className={classes.formControl}>Vendor</FormHelperText>
                  <Checkbox
                    value={"Vendor"}
                    onChange={(event) => setContactType(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>
                <GridItem xs={1} sm={1} md={1}>
                  <FormHelperText className={classes.formControl}>Employee</FormHelperText>
                  <Checkbox
                    value={"Employee"}
                    onChange={(event) => setContactType(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Account Type</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormHelperText className={classes.formControl}>Account Receivable</FormHelperText>
                  <Checkbox
                    value={"Account Receivable"}
                    onChange={(event) => setAccountType(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormHelperText className={classes.formControl}>Account Payyable</FormHelperText>
                  <Checkbox
                    value={"Account Payyable"}
                    onChange={(event) => setAccountType(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="File Scan"
                    id="fileScan"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "file",
                      defaultValue: "",
                      onChange: (event) => setFileScan(event.target.value)
                    }}
                    value={fileScan}
                  />
                  <FormHelperText>File Scan</FormHelperText>
                </GridItem>
              </GridContainer>
              <GridContainer fullWidth>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" className={classes.buttonRight} onClick={() => {}}>
                    Add Bank Account
                  </Button>
                </GridItem>
              </GridContainer>
              <br />
              <Divider />
              <br />
              <GridContainer fullWidth justify="left">
                <GridItem xs={12} sm={12} md={2}>
                  <Button fullWidth onClick={() => {}}>
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                  <Button color="primary" className={classes.buttonRight} onClick={() => {}}>
                    Add Contacts
                  </Button>
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
  }
});

export default Expenses;
