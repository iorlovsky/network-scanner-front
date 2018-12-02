import React, {Component} from 'react';
import {fetchPacketsInfo} from "../../modules/actions/scanners";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Col, Row} from "reactstrap";
import Loader from "../Loader";

class Packets extends Component {
  componentWillMount() {
    this.props.fetchPacketsInfo()
  }

  render() {
    const {packets_info} = this.props;
    return (
      <Col className='panel'>
        <Row className='panel-header'>
          <Col>
            Raw packages info
          </Col>
        </Row>
        <Row className='panel-row'>
          <Col className='break-work'>
            {packets_info ? packets_info.raw : <Loader/>}
          </Col>
        </Row>
      </Col>
    )
  }
}

export default connect(
  state => ({
    packets_info: state.scanners.packets_info
  }),
  dispatch => bindActionCreators({fetchPacketsInfo}, dispatch)
)(Packets);