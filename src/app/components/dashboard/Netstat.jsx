import React from 'react';
import {Col, Row} from "reactstrap";

const renderTableBody = data => {
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

const Netstat = props => {
  const {data} = props;

  return data ? (
    <Col className='panel'>
      <Row className='panel-header'>
        <Col>
          Netstat
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
      {renderTableBody(data)}
    </Col>
  ) : null
};

export default Netstat;