import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchIfstat} from "../../modules/actions/scanners";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "../Loader";

class Ifstat extends Component {
  componentWillMount() {
    this.props.fetchIfstat();
  }

  renderTableBody = data => {
    return data.map(row => (
      <Row className='panel-row' key={row.id}>
        <Col>{row.speed_in}</Col>
        <Col>{row.speed_out}</Col>
      </Row>
    ))
  };

  render() {
    const {ifstat} = this.props;

    return (
      <Col lg='5' md='5' className='panel'>
        <Row className='panel-header'>
          <Col>
            Interface activity
          </Col>
        </Row>
        <Row className='panel-row'>
          <Col>Interface: {ifstat ? ifstat.interface : <Loader size='sm'/>}</Col>
        </Row>
        <Row className='panel-row'>
          <Col>KB/s in</Col>
          <Col>KB/s out</Col>
        </Row>
        {ifstat ? this.renderTableBody(ifstat.speed) : <Loader/>}
      </Col>
    )
  }
}

export default connect(
  state => ({
    ifstat: state.scanners.ifstat
  }),
  dispatch => bindActionCreators({fetchIfstat}, dispatch)
)(Ifstat);