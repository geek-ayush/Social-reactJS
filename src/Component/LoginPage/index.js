import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric
} from "../../Config/Validation";

const renderField = ({ input, label, type, hint, meta }) => {
  {
    meta.error && toast(label + " " + meta.error);
  }
  return (
    <div>
      <Input {...input} type={type} hintText={hint} placeholder={label} />
    </div>
  );
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props, "props at login page lolololoo");
    const { handleSubmit, onLogin, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Modal
          className="Container"
          isOpen={this.props.modal}
          toggle={this.props.toggle}
        >
          <ModalBody>
            <div className="h2">Login</div>

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
            <br />
            <Button primary={true} onClick={handleSubmit(onLogin)}>
              Login
            </Button>
            <br />
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
          <ToastContainer />
        </Modal>
      </div>
    );
  }
}
export default withRouter(
  reduxForm({
    form: "login"
  })(LoginPage)
);
