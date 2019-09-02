import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import "./style.css";
import LoginPage from "../../Container/Login";
import { withRouter, Link } from "react-router-dom";
class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div className="flex-end">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button
              outline
              color="warning"
              onClick={() => {
                this.toggle();
              }}
            >
              Login
            </Button>
          </NavItem>
          <NavItem className="NavItem">
            <Button color="warning">Signup</Button>
          </NavItem>
        </Nav>
        <LoginPage
          modal={this.state.modal}
          toggle={() => {
            this.toggle();
          }}
        />
      </div>
    );
  }
}

export default withRouter(LoginRegister);
