import { LOGIN_URL } from "../../Config/URLs";
import nodeFetch from "node-fetch";
// import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRECT } from "../Config/Settings";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST
} from "./Type";

export function loginUser(username, password) {
  return dispatch => {
    dispatch(loginRequest(username));
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        if (json.hasOwnProperty("error")) dispatch(loginFailure(json));
        else dispatch(loginSuccess(json));
      })
      .catch(error => {
        console.log("ERROR", error);
        dispatch(loginFailure(error));
      });
  };
}
export function loginRequest(username, password) {
  return {
    type: LOGIN_REQUEST,
    payload: { username }
  };
}
export function loginSuccess(json) {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, payload: { json } });
    // console.log("successss,this.props", json.token);
    // if (json.token) {
    //   console.log("token token", this.props);
    //   // this.props.history.push("/some/Path");
    //   // this.props.history.push("/dashboard/");
    // }
    // // // .then(console.log("successss,this.props"));
    // // .then(this.props.history.push("/dashboard/"));
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: { error }
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST
  };
}
