import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
 } from 'reactstrap';
import FormOnChange from './FormOnChange';

class About extends Component {
  state = {
    fields: {}
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }

  render () {
    return (
      <Container>
       <Row>
         <Col>
            <FormOnChange onChange={fields => this.onChange(fields)}/>
         </Col>
         <Col>
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
         </Col>
       </Row>
      </Container>
    );
  }
}

export default About;
