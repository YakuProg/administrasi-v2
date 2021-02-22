import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "../../../components/Card/CardHeader.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import CustomTextField from "../../../components/CustomTextField/CustomTextField.js";

function AddGoodsSale() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [vendore, setVendore] = React.useState("");
  const [customer, setCustomer] = React.useState("");
  const [transDate, setTransDate] = React.useState("");
  const [transactionNo, setTransactionNo] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [pabrik, setPabrik] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [produk, setProduk] = React.useState("");
  const [qty, setQty] = React.useState("");
  const [unit, setUnit] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [memo, setMemo] = React.useState("");
  const [attachment, setAttachment] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [advance, setAdvance] = React.useState("");
  const [balanceDue, setBalanceDue] = React.useState("");

  const [loadMore, setLoadMore] = React.useState([])

  function append() {
    setLoadMore([...loadMore, 
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <FormControl fullWidth={true} className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Produk
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={produk}
              onChange={(event) => setProduk(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">
                <em>Produk A</em>
              </MenuItem>
            </Select>
            <FormHelperText>Pilih Produk</FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <CustomInput
            labelText="Qty"
            id="qty"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: "",
              type: "number",
              onChange: (event) => setQty(event.target.value),
              value: qty
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <CustomInput
            labelText="Unit"
            id="unit"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: "",
              type: "number",
              onChange: (event) => setUnit(event.target.value),
              value: unit
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <CustomInput
            labelText="Unit Price"
            id="unitPrice"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: "",
              type: "number",
              onChange: (event) => setUnitPrice(event.target.value),
              value: unitPrice
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <CustomInput
            labelText="Amount"
            id="amount"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              defaultValue: "",
              type: "number",
              onChange: (event) => setAmount(event.target.value),
              value: amount
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <FormControl fullWidth={true}>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={5}
              variant="outlined"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className={classes.formControl}
            />
          </FormControl>
        </GridItem>
      </GridContainer>
      <Divider className={classes.divider} style={{marginTop: 20, marginBottom: 20}} />
    </>])
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Goods Sale</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem md={6}></GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Transaction No"
                    id="transactionNo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setTransactionNo(event.target.value),
                      value: transactionNo
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Vendor
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={vendore}
                      onChange={(event) => setVendore(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Pabrik A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Vendore</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Customer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={customer}
                      onChange={(event) => setCustomer(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Customer A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Customer</FormHelperText>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Transaction Date"
                    id="transaction-date"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlDate,
                    }}
                    inputProps={{
                      type: "date",
                    }}
                    value={transDate}
                    onChange={(event) => setTransDate(event.target.value)}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomTextField
                    labelText="Due Date"
                    id="due-date"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlDate,
                    }}
                    inputProps={{
                      type: "date",
                    }}
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true} className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Warehouse/Pabrik
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
                    labelText="Term"
                    id="term"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      onChange: (event) => setTerm(event.target.value),
                      value: term
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <FormControl fullWidth={true} className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Produk
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={produk}
                      onChange={(event) => setProduk(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="1">
                        <em>Produk A</em>
                      </MenuItem>
                    </Select>
                    <FormHelperText>Pilih Produk</FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Qty"
                    id="qty"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setQty(event.target.value),
                      value: qty
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Unit"
                    id="unit"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setUnit(event.target.value),
                      value: unit
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Unit Price"
                    id="unitPrice"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setUnitPrice(event.target.value),
                      value: unitPrice
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <CustomInput
                    labelText="Amount"
                    id="amount"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setAmount(event.target.value),
                      value: amount
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl fullWidth={true}>
                    <TextField
                      id="description"
                      label="Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      className={classes.formControl}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer fullWidth>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                    color="primary"
                    className={classes.buttonRight}
                    onClick={() => append()}
                  >
                    Add More Data
                  </Button>
                </GridItem>
              </GridContainer>
              <Divider className={classes.divider} />
              {loadMore}
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth={true}>
                    <TextField
                      id="memo"
                      label="Memo"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={memo}
                      onChange={(event) => setMemo(event.target.value)}
                      className={classes.formControl}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Attachment"
                    id="attachment"
                    formControlProps={{
                      fullWidth: true,
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
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Balance Due"
                    id="balanceDue"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setBalanceDue(event.target.value),
                      value: balanceDue
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Total"
                    id="total"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setTotal(event.target.value),
                      value: total
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Advance"
                    id="advance"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      defaultValue: "",
                      type: "number",
                      onChange: (event) => setAdvance(event.target.value),
                      value: advance
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
                    Create Sale & Purchase
                  </Button>
                  <Button
                    color="primary"
                    className={classes.buttonRight}
                    onClick={() => {}}
                  >
                    Create Sale
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
  formControlDate: {
    marginTop: "20px",
  },
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
  buttonRight: {
    float: "right",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default AddGoodsSale;
