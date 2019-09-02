import { connect } from "react-redux";
import Login from "../Component/LoginPage";
import { loginUser, logout, userFetch } from "../Redux/Action/index";

const mapStateToProps = state => {
  return state.User;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: credential => {
      console.log(props, "cred");
      dispatch(loginUser(credential.username, credential.password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
