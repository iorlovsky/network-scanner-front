import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchCommonNetworkInfo} from "../../modules/actions/scanners";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "../Loader";

class CommonInfo extends Component {
  componentWillMount() {
    this.props.fetchCommonNetworkInfo()
  }

  render() {
    const {network_common_info} = this.props;
    return (
      <Col className='panel content-size'>
        <Row className='panel-header'>
          <Col>
            Network common information
          </Col>
        </Row>
        <Row className='panel-row'>
          <Col>IP address: {network_common_info ? network_common_info.ip_addr : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Broadcast: {network_common_info ? network_common_info.broadcast : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Subnet Mask: {network_common_info ? network_common_info.subnet_mask : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>Interface: {network_common_info ? network_common_info.interface : <Loader size='sm'/>}</Col>
        </Row>
      </Col>
    )
  }
}

export default connect(
  state => ({
    network_common_info: state.scanners.network_common_info
  }),
  dispatch => bindActionCreators({fetchCommonNetworkInfo}, dispatch)
)(CommonInfo);