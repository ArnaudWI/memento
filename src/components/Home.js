import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
 } from 'reactstrap';

class Home extends Component {

  handleSubmit = () => {
    this.props.history.push('/about')
  }

  render () {
    return (
      <Container>
       <Row>
         <Col>
          <Button onClick={this.handleSubmit} color="primary">About</Button>
          <Button onClick={() => this.props.history.push('/contact')} color="primary">Contact</Button>
         </Col>
       </Row>
      </Container>
    );
  }
}

export default Home;
