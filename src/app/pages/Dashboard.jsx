import React, { Component, Fragment } from 'react';
import Netstat from "../components/dashboard/Netstat";
import Ifstat from "../components/dashboard/Ifstat";
import CommonInfo from "../components/dashboard/CommonInfo";
import {Row} from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className='page-header'>Dashboard</div>
        <Row>
          <Netstat/>
        </Row>
        <Row>
          <Ifstat/>
          <CommonInfo/>
        </Row>
      </Fragment>
    )
  }
}

export default Dashboard;