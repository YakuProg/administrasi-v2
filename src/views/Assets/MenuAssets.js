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
import Checkbox from '@material-ui/core/Checkbox';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function MenuAssets() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tanggalBeli, setTanggalBeli] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [jumlah, setJumlah] = React.useState("");
  const [assets, setAssets] = React.useState("");
  const [serviceDate, setServiceDate] = React.useState("");
  const [gantiOli, setGantiOli] = React.useState("");
  const [perpanjanganSurat, setPerpanjanganSurat] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>List Of Assets</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer justify="left">
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" className={classes.buttonRight} onClick={() => handleClickOpen()}>
                    Add New Assets
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Dialog open={open} onClose={handleClose} maxWidth={"md"} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Assets</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.labelDialog}>
            Name/Code
          </DialogContentText>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Code"
                id="code"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  defaultValue: "",
                  onChange: (event) => setCode(event.target.value)
                }}
                value={code}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Name"
                id="name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  defaultValue: "",
                  onChange: (event) => setName(event.target.value)
                }}
                value={name}
              />
            </GridItem>
          </GridContainer>
          <DialogContentText className={classes.labelDialog}>
            Description
          </DialogContentText>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <FormControl fullWidth={true}>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={3}
                  variant="outlined"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className={classes.formControl}
                />
              </FormControl>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <FormControl fullWidth className={classes.formPadding}>
                <TextField
                  id="tanggalBeli"
                  label="Tanggal Beli"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={tanggalBeli}
                  onChange={(event) => setTanggalBeli(event.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div className={classes.formPadding}>
                <CustomInput
                  labelText="Jumlah"
                  id="jumlah"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    defaultValue: "",
                    type: "number",
                    onChange: (event) => setJumlah(event.target.value)
                  }}
                  value={jumlah}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FormControl fullWidth className={classes.formPadding}>
                <TextField
                  id="expireDate"
                  label="Expire Date"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={expireDate}
                  onChange={(event) => setExpireDate(event.target.value)}
                />
              </FormControl>
            </GridItem>
          </GridContainer>
          <DialogContentText className={classes.labelDialog}>
            Assets Picture
          </DialogContentText>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Assets Picture"
                id="assets"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "file",
                  defaultValue: "",
                  onChange: (event) => setAssets(event.target.value)
                }}
                value={assets}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <FormControl fullWidth className={classes.formPadding}>
                <TextField
                  id="tanggalService"
                  label="Tanggal Service"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={serviceDate}
                  onChange={(event) => setServiceDate(event.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FormControl fullWidth className={classes.formPadding}>
                <TextField
                  id="gantiOli"
                  label="Ganti Oli"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={gantiOli}
                  onChange={(event) => setGantiOli(event.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FormControl fullWidth className={classes.formPadding}>
                <TextField
                  id="perpanjanganSurat"
                  label="Perpanjangan Surat Kendaraan"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={perpanjanganSurat}
                  onChange={(event) => setPerpanjanganSurat(event.target.value)}
                />
              </FormControl>
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions className={classes.formPadding}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {}} color="primary">
            Create Assets
          </Button>
        </DialogActions>
      </Dialog>
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
  labelDialog: {
    width : 800,
    marginTop : 20,
    color: '#23457a',
    fontWeight: '450'
  },
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiFormControl-root': {
      margin: 0
    },
  }
});

export default MenuAssets;
