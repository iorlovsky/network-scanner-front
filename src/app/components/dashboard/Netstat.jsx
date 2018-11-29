import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {fetchNetstat} from "../../modules/actions/scanners";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Netstat extends Component {
  componentWillMount() {
    this.props.fetchNetstat();
  }

  renderTableBody = data => {
    return data.map(row => (
      <Row className='panel-row' key={row.id}>
        <Col>{row.protocol}</Col>
        <Col>{row.recv_q}</Col>
        <Col>{row.send_q}</Col>
        <Col>{row.local_addr}</Col>
        <Col>{row.foreign_addr}</Col>
        <Col>{row.state}</Col>
      </Row>
    ))
  };

  render() {
    const {netstat} = this.props;

    return (
      <Col className='panel'>
        <Row className='panel-header'>
          <Col>
            Active network connections
          </Col>
        </Row>
        <Row className='panel-row'>
          <Col>Protocol</Col>
          <Col>Recv-Q</Col>
          <Col>Send-Q</Col>
          <Col>Local Address</Col>
          <Col>Foreign Address</Col>
          <Col>State</Col>
        </Row>
        {netstat ?
          this.renderTableBody(netstat) :
          (
            <div className='loader-container'>
              <div className="lds-dual-ring"></div>
            </div>
          )
        }
      </Col>
    )
  }
}

export default connect(
  state => ({
    netstat: state.scanners.netstat
  }),
  dispatch => bindActionCreators({fetchNetstat}, dispatch)
) (Netstat);