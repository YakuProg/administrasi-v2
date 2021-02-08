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
  const [payFrom, setPayFrom] = React.useState("");
  const [payLater, setPayLater] = React.useState("");
  const [benificiary, setBenificiary] = React.useState("");
  const [transactionDate, setTransactionDate] = React.useState("");
  const [transactionNo, setTransactionNo] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [paymentFor, setPaymentFor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [memo, setMemo] = React.useState("");
  const [attachment, setAttachment] = React.useState("");
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Expenses</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Pay From
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={payFrom}
                      onChange={(event) => setPayFrom(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Location A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Location</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>or</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormHelperText className={classes.formControl}>Pay Later</FormHelperText>
                  <Checkbox
                    value={payLater}
                    onChange={(event) => setPayLater(event.target.value)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Benificiary
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={benificiary}
                      onChange={(event) => setBenificiary(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Ben A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Benificiary</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth>
                    <TextField
                      id="transcDate"
                      label="Transaction Date"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.formControl}
                      value={transactionDate}
                      onChange={(event) => setTransactionDate(event.target.value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Transaction No."
                    id="transactionNo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={transactionNo}
                    onChange={(event) => setTransactionNo(event.target.value)}
                    inputProps={{
                      type: "number",
                      defaultValue: "",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Payment Method
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={paymentMethod}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Payment A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Payment</FormHelperText>
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
                      Payment For
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={paymentFor}
                      onChange={(event) => setPaymentFor(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Payment For A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Payment For</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth={true}>
                    <TextField
                      id="description"
                      label="Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      className={classes.formControl}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Total"
                    id="total"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={total}
                    onChange={(event) => setTotal(event.target.value)}
                    inputProps={{
                      type: "number",
                      defaultValue: "",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth={true}>
                    <TextField
                      id="memo"
                      label="Memo"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={memo}
                      onChange={(event) => setMemo(event.target.value)}
                      className={classes.formControl}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Attachment"
                    id="attachment"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "file",
                      defaultValue: "",
                    }}
                    value={attachment}
                    onChange={(event) => setAttachment(event.target.value)}
                  />
                  <FormHelperText>Attachment</FormHelperText>
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer fullWidth justify="left">
                <GridItem xs={12} sm={12} md={2}>
                  <Button fullWidth onClick={() => {}}>
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                  <Button color="primary" className={classes.buttonRight} onClick={() => {}}>
                    Add Expenses
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
  }
});

export default Expenses;
