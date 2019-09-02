import { connect } from "react-redux";
import Register from "../Screen/RegisterPage";
import { registerUser } from "../Redux/Action/index";

const mapStateToProps = state => {
  // console.log(state.auth)
  return state.User;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRegister: credential => {
      const user_details = {
        user_name: credential.username,
        contact: credential.contact,
        dob: credential.dob,
        gender: credential.gender,
        gmail_id: credential.gmail_id,
        name: credential.name,
        slack_id: credential.username,
        slack_webhook: credential.username
      };
      dispatch(registerUser(user_details, credential.password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
