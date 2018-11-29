import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchNetstat} from "../../modules/actions/scanners";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "../Loader";

class CommonInfo extends Component {
  componentWillMount() {
  }

  render() {
    const {network_info} = this.props;
    return (
      <Col className='panel content-size'>
        <Row className='panel-header'>
          <Col>
            Network common information
          </Col>
        </Row>
        <Row className='panel-row'>
          <Col>IP address: {network_info ? network_info.ip_addr : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Broadcast: {network_info ? network_info.bcast : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Subnet Mask: {network_info ? network_info.mask : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Interface: {network_info ? network_info.interface : <Loader size='sm'/>}</Col>
        </Row>
      </Col>
    )
  }
}

export default connect(
  state => ({
    netstat: state.scanners.netstat
  }),
  dispatch => bindActionCreators({fetchNetstat}, dispatch)
)(CommonInfo);