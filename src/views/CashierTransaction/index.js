import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layers from "@material-ui/icons/Layers";
import CardHeader from "../../components/Card/CardHeader.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Snackbar from "../../components/Snackbar/Snackbar.js";
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function CashierTransaction() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <div className={classes.tabs}>
            <h5 className={classes.title}>Cashier Transaction</h5>
            <GridContainer>
              <GridItem xs={1} sm={1} md={1}>
                <div>
                  <Layers className={classes.icon} />
                  <Layers className={classes.icon} />
                  <Layers className={classes.icon} />
                  <Layers className={classes.icon} />
                </div>
              </GridItem>
              <GridItem xs={11} sm={11} md={11}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                >
                  <Tab label="Cashier Cash/ Buku Kas" {...a11yProps(0)} />
                  <Tab label="Sales/Penjualan" {...a11yProps(1)} />
                  <Tab label="Purchases/Pembelian" {...a11yProps(2)} />
                  <Tab label="Contacts/Buku Panjar" {...a11yProps(3)} />
                </Tabs>
              </GridItem>
            </GridContainer>
            
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <TabPanel value={value} index={0}>
            <div className={classes.tabsContent}>
              <h5 className={classes.title}>Cashier Cash/ Buku Kas</h5>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.tabsContent}>
              <h5 className={classes.title}>Sales/Penjualan</h5>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.tabsContent}>
              <h5 className={classes.title}>Purchases/Pembelian</h5>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={classes.tabsContent}>
              <h5 className={classes.title}>Contacts/Buku Panjar</h5>
            </div>
          </TabPanel>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const styles = () => ({
  formControl: {
    marginTop: "30px",
  },
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  tabs: {
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 30,
    paddingBottom: 20,
  },
  tabsContent: {
    paddingTop: 1,
    paddingLeft: 30,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  title: {
    fontWeight: '500'
  },
  icon: {
    marginTop: 16
  },
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiTab-root': {
      textAlign: 'left'
    },
    '.MuiTab-wrapper': {
      alignItems: 'flex-start'
    },
    '.MuiBox-root': {
      padding: 0
    }
  },
});

export default CashierTransaction;
