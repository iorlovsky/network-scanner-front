import React, { Component, Fragment } from 'react';
import Netstat from "../components/dashboard/Netstat";
import {Row} from "reactstrap";
import {connect} from "react-redux";
import {fetchNetstat} from "../modules/actions/scanners";
import {bindActionCreators} from "redux";

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchNetstat();
  }

  render() {
    const netstatData = this.props.netstat;
    return (
      <Fragment>
        <div>Dashboard</div>
        <Row>
          <Netstat data={netstatData}/>
        </Row>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    netstat: state.scanners.netstat
  }),
  dispatch => bindActionCreators({fetchNetstat}, dispatch)
)(Dashboard);