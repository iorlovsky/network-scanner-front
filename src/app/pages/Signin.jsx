import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signin} from "../modules/actions/app";
import {Col, Container, Row} from "reactstrap";
import SigninForm from "../components/SigninForm";

class Signin extends React.Component {

  onSubmit = (form) => {
    console.log(form);
    signin(form);
  };

  render() {
    return (
      <Container>
        <Row className='screen-center-container'>
          <Col md='4' sm='8' className='panel'>
            <Row className='panel-header'>
              <Col>Sign in</Col>
            </Row>
            <Row className='panel-content'>
              <Col>
                <SigninForm onSubmit={this.onSubmit}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({}, dispatch)
)(Signin);