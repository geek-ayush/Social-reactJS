import { REGISTER_URL } from "../../Config/URLs";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./Type";

export function registerUser(user_details, password) {
  return dispatch => {
    dispatch(registerRequest(user_details));
    console.log(user_details, "on api register");
    fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user_details.name,
        user_name: user_details.user_name,
        dob: user_details.dob,
        gender: user_details.gender,
        slack_id: user_details.slack_id,
        slack_webhook: user_details.slack_webhook,
        gmail_id: user_details.gmail_id,
        contact: user_details.contact,
        password: password
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        if (json.hasOwnProperty("error")) dispatch(registerFailure(json));
        else dispatch(registerSuccess(json));
      })
      .catch(error => {
        console.log("ERROR", error);
        dispatch(registerFailure(error));
      });
  };
}
export function registerRequest(username) {
  return {
    type: REGISTER_REQUEST,
    payload: { username }
  };
}
export function registerSuccess(json) {
  return {
    type: REGISTER_SUCCESS,
    payload: { json }
  };
}
export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    payload: { error }
  };
}
