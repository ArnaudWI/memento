import React from 'react';
import {
  Button
 } from 'reactstrap';

//Composant pour un formulaire dynamique avec capture de la data dès l'action de l'utilisateur sur
//l'input. On envoie la data via la fonction change() au composant About. Le bouton handleSubmit
// est utile pour capter la data et la reset lors du click.
class FormOnChange extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.onChange({[e.target.name]: e.target.value})
  };



  handleSubmit = e => {
    console.log('submit' , this.state)
    e.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    })
    this.props.onChange({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <form>
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <label>User Name</label>
        <input
          name="userName"
          placeholder="First Name"
          value={this.state.userName}
          onChange={e => this.change(e)}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <Button onClick={this.handleSubmit} color="primary">Valider</Button>
      </form>
    );
  }
}

export default FormOnChange;
