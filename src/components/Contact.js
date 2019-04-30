import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
 } from 'reactstrap';
 import FormOnSubmit from './FormOnSubmit';

class Contact extends Component {
  state = {
    fields : {}
  };

  onSubmit = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }

    });
  }

  onSubmit = fields => this.setState({fields})

  render () {
    return (
      <Container>
       <Row>
         <Col>
          <FormOnSubmit onSubmit={fields => this.onSubmit(fields)}/>
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

export default Contact;
