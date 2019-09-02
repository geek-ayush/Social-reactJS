import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./style.css";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ChangePassword from "../../Container/ChangePassword";
import UpdateDetails from "../../Container/UpdateDetails";
import DPUpdate from "../../Container/DPUpdate";

export default class DashCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container d-flex vw-100 vh-100">
        <div className="d-flex flex-column flex1 h-100">
          <Card className="mb-4 flex1 shadow-lg">
            {/* <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            /> */}
            <CardBody>
              <div className="d-flex align-items-center">
                <CardTitle className="flex1">Change Password</CardTitle>
                <IconButton
                  aria-label="edit"
                  onClick={() => console.log("edit")}
                >
                  <EditIcon />
                </IconButton>
              </div>
              <ChangePassword />
            </CardBody>
          </Card>
          <Card className="shadow-lg">
            <CardBody>
              <div className="d-flex align-items-center">
                <CardTitle className="flex1">Update Details</CardTitle>
                <IconButton
                  aria-label="edit"
                  onClick={() => console.log("edit")}
                >
                  <EditIcon />
                </IconButton>
              </div>
              <div className="overflow-auto vh-25">
                <UpdateDetails />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex1 shadow-lg">
          <Card className="h-100">
            <CardBody>
              <div className="d-flex align-items-center">
                <CardTitle className="flex1">Update DP</CardTitle>
                <IconButton
                  aria-label="edit"
                  onClick={() => console.log("edit")}
                >
                  <EditIcon />
                </IconButton>
              </div>
              <DPUpdate />
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
