import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import Avatar from "react-avatar-edit";
import "./style.css";
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric
} from "../../Config/Validation";

class DPUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null
    };
  }
  onClose = () => {
    this.setState({ preview: null });
  };

  onCrop = preview => {
    this.setState({ preview });
  };

  render() {
    return (
      <div className="overflow-hidden d-flex flex-column">
        <div className="mb-2 flex1">
          <Avatar
            width={338}
            height={420}
            onCrop={this.onCrop}
            onClose={this.onClose}
            src={this.state.src}
          />
        </div>
        <div className="ml-auto">
          <Button outline color="warning">
            Save
          </Button>
        </div>
      </div>
      // {/* <img src={this.state.preview} alt="Preview" />  */}
    );
  }
}
export default withRouter(
  reduxForm({
    form: "dpUpdate"
  })(DPUpdate)
);
