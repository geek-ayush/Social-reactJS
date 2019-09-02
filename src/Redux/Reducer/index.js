import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import User from "./LoginReducer";

const rootReducer = combineReducers({
  User,
  form: formReducer
});

export default rootReducer;
