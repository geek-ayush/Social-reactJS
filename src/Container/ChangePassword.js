import { connect } from "react-redux";
import ChangePassword from "../Component/ChangePassword";
import { loginUser, logout, userFetch } from "../Redux/Action/index";

const mapStateToProps = state => {
  return state.User;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: credential => {
      console.log(props, "cred");
      //   dispatch(loginUser(credential.username, credential.password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
