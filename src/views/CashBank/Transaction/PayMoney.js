import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "components/Card/CardHeader.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomTextField from "components/CustomTextField/CustomTextField.js";

function PayMoney() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [responseDataComplaintDetail] = useState({
    data: null,
    isLoading: true,
  });
  const [responseInqueryUnitKerja] = useState({
    data: null,
    isLoading: true,
  });
  const [responseCategory] = useState({
    data: null,
    isLoading: true,
  });
  const [category, setCategory] = React.useState("");
  const [eskalasi, setEskalasi] = React.useState("");

  const handleChangeEskalasi = (event) => {
    setEskalasi(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Pay Money</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth={true}
                    disabled={responseDataComplaintDetail?.data !== null}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Pay From
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Term"
                    id="term"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "date",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth={true}
                    disabled={responseDataComplaintDetail?.data !== null}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Payee
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
                <GridItem xs={12} sm={12} md={3}>
                  <CustomTextField
                    labelText="Transaction Date"
                    id="transaction-date"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "date",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Transaction No"
                    id="transaction-no "
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl
                    fullWidth={true}
                    disabled={responseDataComplaintDetail?.data !== null}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Payment For Account
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
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Netto"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Harga"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Amount"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomTextField
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlTextArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      variant: "outlined",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl
                    fullWidth={true}
                    className={classes.formControl}
                    disabled={responseDataComplaintDetail?.data !== null}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Expenses
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
                    <FormHelperText>Pilih Expenses</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Total"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Balence Due"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Amount Two"
                    id="name-nasabah"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomTextField
                    labelText="Description"
                    id="description"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlTextArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      variant: "outlined",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Memo"
                    id="memo"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlTextArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      variant: "outlined",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Attachment"
                    id="attachment"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlTextArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      variant: "outlined",
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
    </div>
  );
}
const styles = () => ({
  formControl: {
    marginTop: "10px",
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

export default PayMoney;
