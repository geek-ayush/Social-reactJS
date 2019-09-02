import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric
} from "../../Config/Validation";

const renderField = ({ input, label, type, hint, meta }) => {
  // {
  //   meta.error && toast(label + " " + meta.error);
  // }
  return (
    <div>
      <Input
        {...input}
        type={type}
        hintText={hint}
        className="textInput"
        placeholder={label}
      />
    </div>
  );
};

class ChangePassword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overflow-hidden d-flex flex-column">
        <div>
          <Field
            name="password"
            type="password"
            hint="Enter your Password"
            component={renderField}
            label="Current Password"
            validate={required}
          />
          <Field
            name="password"
            type="password"
            hint="Enter your Password"
            component={renderField}
            label="New Password"
            validate={required}
          />
          <Field
            name="password"
            type="password"
            hint="Enter your Password"
            component={renderField}
            label="Confirm Password"
            validate={required}
          />
        </div>
        <div className="ml-auto">
          <Button outline color="warning">
            Save
          </Button>
        </div>
      </div>
    );
  }
}
export default withRouter(
  reduxForm({
    form: "changePassword"
  })(ChangePassword)
);
