import { connect } from "react-redux";
import DPUpdate from "../Component/DPUpdate";
import { loginUser, logout, userFetch } from "../Redux/Action/index";

const mapStateToProps = state => {
  return state.User;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: credential => {
      console.log(credential, "cred");
      //   dispatch(loginUser(credential.username, credential.password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DPUpdate);
