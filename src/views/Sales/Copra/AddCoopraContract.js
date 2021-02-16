import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "components/Card/CardHeader.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomTextField from "components/CustomTextField/CustomTextField.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function TransferFounds() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [pabrik, setPabrik] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [transDate, setTransDate] = React.useState("");
  const [attachment, setAttachment] = React.useState("");
  const [memo, setMemo] = React.useState("");

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Coopra Contract</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true} className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Pabrik
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={pabrik}
                      onChange={(event) => setPabrik(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Pabrik A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Pabrik</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Amount"
                    id="amount"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                      defaultValue: "",
                      value: amount,
                      onChange: (event) => setAmount(event.target.value)
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Transaction Date"
                    id="trans-date"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "date",
                      value: transDate,
                      onChange: (event) => setTransDate(event.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Attachment"
                    id="attachment"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlFile,
                    }}
                    inputProps={{
                      type: "file",
                      defaultValue: "",
                      onChange: (event) => setAttachment(event.target.value),
                      value: attachment                   
                    }}
                  />
                  <FormHelperText>Attachment</FormHelperText>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Memo"
                    id="memo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: memo,
                      onChange: (event) => setMemo(event.target.value),
                      multiline: true,
                      rows: 5,
                      variant: "outlined",
                    }}
                  />
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
                  <Button
                    color="primary"
                    className={classes.buttonRight}
                    onClick={() => {}}
                  >
                    Create Contract
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
  formControlFile: {
    margin: "0 0 0px 0",
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
    float: "right",
  },
});

export default TransferFounds;
