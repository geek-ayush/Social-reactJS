import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
} from "../Action/Type";

const INIT_STATE = {
  id: -1,
  auth_token: "",
  user_details: {
    user_name: "",
    contact: "",
    dob: "",
    gender: "",
    gmail_id: "",
    name: "",
    slack_id: "",
    slack_webhook: ""
  },
  expires: null,
  loading: false,
  auth_error: null
};

const User = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user_name: action.payload.username,
        loading: true,
        auth_error: null
      };
      break;
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth_token: action.payload.json.token,
        user_details: action.payload.json.userDetails,
        loading: false,
        auth_error: null
      };
      break;
    case LOGIN_FAILURE:
      return {
        ...state,
        auth_token: "",
        user_details: "",
        expires: null,
        loading: false,
        auth_error: action.payload.error
      };
      break;
    default:
      return state;
  }
};

export default User;
