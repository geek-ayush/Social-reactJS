import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric
} from "../Config/Validation";

const renderField = ({ input, label, type, hint, meta }) => {
  console.log(meta, label, "edfjbhvdhwqv");
  {
    meta.error && toast(label + " " + meta.error);
  }
  return (
    <div>
      <TextField
        {...input}
        type={type}
        hintText={hint}
        floatingLabelText={label}
      />
    </div>
  );
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props, "props at login page");
    const { handleSubmit, onRegister } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <div style={flexx}>
              <Field
                name="username"
                type="text"
                component={renderField}
                hint="Enter your Username"
                label="Username"
                validate={[required, maxLength15, minLength2]}
              />
              <Field
                name="password"
                type="password"
                hint="Enter your Password"
                component={renderField}
                label="Password"
                validate={required}
              />
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
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={handleSubmit(onRegister)}
              />
              <div style={bottom}>
                Already a User ?{" "}
                <Link to={`/`} color={"grey"}>
                  {" "}
                  LogIn
                </Link>
              </div>
            </div>
            <ToastContainer />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
const flexx = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
};
const bottom = {
  fontSize: 15,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "center",
  color: "grey"
};
export default reduxForm({
  form: "login"
})(RegisterPage);
