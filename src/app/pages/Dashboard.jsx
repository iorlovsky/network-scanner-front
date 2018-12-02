import React, { Component, Fragment } from 'react';
import Netstat from "../components/dashboard/Netstat";
import Ifstat from "../components/dashboard/Ifstat";
import CommonInfo from "../components/dashboard/CommonInfo";
import Packets from "../components/dashboard/Packets";
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
        <Row>
          <Packets/>
        </Row>
      </Fragment>
    )
  }
}

export default Dashboard;