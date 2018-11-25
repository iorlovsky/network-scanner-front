import React from "react";
import {connect} from "react-redux";
import history from "../router/history";
import {ROUTES} from "../common/constants";

class Main extends React.Component{
  componentWillMount() {
    if (!this.props.user) history.push(ROUTES.signin);
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}


export default connect(
  state => ({
    user: state.app.user
  }),
  null
)(Main);