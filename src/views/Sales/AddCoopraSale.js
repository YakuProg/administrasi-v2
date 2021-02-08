import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Divider from "@material-ui/core/Divider";
import { Line } from "react-chartjs-2";
// import AccessTime from "@material-ui/icons/AccessTime";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";

//WAWAN
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from "../../components/CustomButtons/Button.js";


export default function AddCoopraSale() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [dataResponse, setDataResponse] = useState({
    dataRekap: null,
    isLoading: true,
  });
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
            <CardHeader>
              <h4 className={classes.cardTitleBlack}>Add Coopra Sale</h4>
              <Divider />
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Pabrik</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <FormControl variant="outlined" className={classes.selectButton}>
                    <InputLabel htmlFor="pabrik">Pabrik</InputLabel>
                    <Select
                      native
                      value={pabrik}
                      onChange={(event) => setPabrik(event.target.value)}
                      label="Pabrik"
                      inputProps={{
                        name: 'pabrik',
                        id: 'pabrik',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Pabrik A</option>
                      <option value={2}>Pabrik B</option>
                      <option value={3}>Pabrik C</option>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <Divider className={classes.divider} />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Vendor/Relasi</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <FormControl variant="outlined" className={classes.selectButton}>
                    <InputLabel htmlFor="vendor">Vendor</InputLabel>
                    <Select
                      native
                      value={vendor}
                      onChange={(event) => setVendor(event.target.value)}
                      label="Vendor"
                      inputProps={{
                        name: 'vendor',
                        id: 'vendor',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Ben A</option>
                      <option value={2}>Ben B</option>
                      <option value={3}>Ben C</option>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <Divider className={classes.divider} />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Date</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classes.selectButton}>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      className={classes.textField}
                      onChange={(event) => setDate(event.target.value)}
                      value={date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined" 
                    />
                  </FormControl>
                </GridItem><GridItem xs={12} sm={12} md={1}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel className={classes.label}>Due Date</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.selectButton}>
                    <TextField
                      id="date"
                      label="Due Date"
                      type="date"
                      className={classes.textField}
                      onChange={(event) => setDueDate(event.target.value)}
                      value={dueDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <Divider className={classes.divider} />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel className={classes.label}>Plat Mobil</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classes.platMobil}>
                    <TextField
                      variant="outlined"
                      id="platMobil"
                      label="Plat Mobil"
                      type="platMobil"
                      onChange={(event) => setPlatMobil(event.target.value)}
                      value={platMobil}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </GridItem><GridItem xs={12} sm={12} md={1}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Bruto</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl className={classes.bruto}>
                    <TextField
                      variant="outlined"
                      id="bruto"
                      label="Bruto"
                      type="bruto"
                      onChange={(event) => setBruto(event.target.value)}
                      value={bruto}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Pot%</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl className={classes.pot}>
                    <TextField
                      variant="outlined"
                      id="pot"
                      label="Pot%"
                      type="pot"
                      onChange={(event) => setPot(event.target.value)}
                      value={pot}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl variant="outlined" className={classes.labelForm}>
                    <InputLabel>Colly</InputLabel>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <FormControl className={classes.colly}>
                    <TextField
                      variant="outlined"
                      id="colly"
                      label="Colly"
                      type="colly"
                      onChange={(event) => setColly(event.target.value)}
                      value={colly}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <Divider className={classes.divider} />
            </CardBody>
            <CardFooter>
                <GridItem xs={12} sm={12} md={3}>
                  <Button onClick={() => {}}>
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <Button className={classes.buttonRight} color="primary" onClick={() => {}}>
                    Create Sale
                  </Button>
                  <Button color="primary" className={classes.buttonRight} onClick={() => {}}>
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
    textAlign: 'left'
  },
  divider: {
    margin: 20
  },
  labelForm: {
    textAlign: "right",
  },
  platMobil: {
    minWidth: '100%'
  },
  buttonRight: {
    float: 'right'
  }
});
