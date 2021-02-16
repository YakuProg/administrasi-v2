import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
// import AccessTime from "@material-ui/icons/AccessTime";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

//WAWAN
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "../../../components/CustomButtons/Button.js";

export default function AddCoopraSale() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [pabrik, setPabrik] = React.useState("");
  const [vendor, setVendor] = React.useState("");
  const [date, setDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [platMobil, setPlatMobil] = React.useState("");
  const [bruto, setBruto] = React.useState("");
  const [pot, setPot] = React.useState("");
  const [colly, setColly] = React.useState("");

  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Coopra Sale</h4>
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
                  <FormControl fullWidth={true} className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Vendor/Relasi
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={vendor}
                      onChange={(event) => setVendor(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Vendor A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Vendor/Relasi</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.formControl}
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth>
                    <TextField
                      id="dueDate"
                      label="Due Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.formControl}
                      value={dueDate}
                      onChange={(event) => setDueDate(event.target.value)}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Plat Mobil"
                    id="platMobil"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setPlatMobil(event.target.value),
                      value: platMobil
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Bruto"
                    id="bruto"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setBruto(event.target.value),
                      value: bruto
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Pot%"
                    id="pot"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setPot(event.target.value),
                      value: pot
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Colly"
                    id="colly"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setColly(event.target.value),
                      value: colly
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <GridItem xs={12} sm={12} md={3}>
                <Button onClick={() => {}}>Cancel</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={9}>
                <Button
                  className={classes.buttonRight}
                  color="primary"
                  onClick={() => {}}
                >
                  Create Sale
                </Button>
                <Button
                  color="primary"
                  className={classes.buttonRight}
                  onClick={() => {}}
                >
                  Create Sale & Purchase
                </Button>
              </GridItem>
            </CardFooter>
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
  cardTitleBlack: {
    color: "#000000",
    marginTop: "30px",
    minHeight: "auto",
    fontWeight: "500",
    fontSize: "23px",
    fontFamily: "'Roboto'",
    // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "20px",
    textDecoration: "none",
  },
  selectButton: {
    minWidth: 280,
  },
  label: {
    minWidth: 100,
    textAlign: "left",
  },
  divider: {
    margin: 20,
  },
  labelForm: {
    textAlign: "right",
  },
  platMobil: {
    minWidth: "100%",
  },
  buttonRight: {
    float: "right",
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
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
});
