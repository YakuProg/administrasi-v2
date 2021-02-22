import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from "assets/jss/material-dashboard-react/components/customTextFieldStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTextField(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    inputProps,
    error,
    inputRootCustomClasses,
    success,
    helperText,
  } = props;

  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  };

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      <TextField
        label={labelText !== undefined ? labelText : null}
        classes={{
          root: marginTop,
        }}
        id={id}
        {...inputProps}
        inputProps={newInputProps}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {helperText !== undefined ? (
        <FormHelperText id={id + "-text"} className={helpTextClasses}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

CustomTextField.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
};
