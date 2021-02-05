/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import {
  Link,
  useHistory,
} from "react-router-dom";

import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";

const styles = (theme) => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
});

const useStyles = makeStyles(styles);

export default function CashBank() {
  const classes = useStyles();
  const history = useHistory();
  
  const naviagteTo = (pathname) => {
    history.push({
      pathname
    });
  }
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                Receivables next 30 days
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                Payables next 30 days
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                Cash Balence
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                Bank Balence
              </GridItem>
            </GridContainer>
            <Table
              tableHeaderColor="primary"
              tableHead={["No","Account Code", "Acc Name", "Last Update"]}
              tableData={[
                ["1","Nama Lengkap", "MAMAN NURAHMAN", "Oud-Turnhout"],
                ["2","Tanggal Lahir", "29-04-1994", "Sinaai-Waas"],
                ["3","Jenis Kelamin", "Laki-laki", "Sinaai-Waas"],
                ["4","Nomor HP", "082144534822", "Baileux"],
                ["5","Nama Ibu Kandung", "MIMIN", "Overland Park"],
                ["6","Alamat", "GG. MELATI I NO 5 BLOK VII", "Feldkirchen in Kärnten"],
              ]}
            />
            <br />
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => naviagteTo('/admin/transferfounds')}
                >
                  Transfer Founds
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Button
                  fullWidth
                  color="danger"
                  onClick={() => naviagteTo('/admin/receivemoney')}
                >
                  Receive Money
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Button
                  fullWidth
                  color="warning"
                  onClick={() => naviagteTo('/admin/paymoney')}
                >
                  Pay Money
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
