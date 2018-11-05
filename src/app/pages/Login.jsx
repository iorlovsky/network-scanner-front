import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchUser} from "../modules/actions/user";

class Login extends React.Component {
  render() {
    let {user, fetchUser} = this.props;
    console.log(user)
    return (
      <div>
        <button onClick={fetchUser}>Login</button>
        {/*<div>{user}</div>*/}
      </div>
    )
  }
}




export default connect(
  state => ({
    user: state.user
  }),
  dispatch => bindActionCreators({fetchUser}, dispatch)
)(Login);