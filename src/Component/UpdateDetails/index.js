import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric
} from "../../Config/Validation";
import "./style.css";

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

class UpdateDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overflow-hidden d-flex flex-column">
        <div>
          <Field
            name="name"
            type="text"
            component={renderField}
            hint="Enter your Full Name"
            label="Full Name"
            validate={[required, maxLength15, minLength2]}
          />
          <Field
            name="dob"
            type="date"
            hint="Enter your DOB"
            component={renderField}
            label="Date Of Birth"
            validate={required}
          />
          <Field
            name="gender"
            type="text"
            component={renderField}
            hint="Enter your Gender"
            label="Gender"
            validate={[required, maxLength15, minLength2]}
          />
          <Field
            name="contact"
            type="phone"
            hint="Enter your Phone No."
            component={renderField}
            label="Phone No."
            validate={required}
          />
          <Field
            name="gmail_id"
            type="email"
            hint="Enter your Gmail ID"
            component={renderField}
            label="Gmail ID"
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
    form: "updateDetails"
  })(UpdateDetails)
);
