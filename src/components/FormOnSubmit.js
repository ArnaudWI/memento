import React from 'react';
import {
  Button
 } from 'reactstrap';

//Composant pour faire un formulaire avec capture de la data au moment du click
//sur le bouton et l'execution de la fonction handleSubmit
// envoi de la data au composant Contact pour affichage de la data une fois la fonction
// handleSubmit executé

class FormOnSubmit extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  }


handleSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  })
  // this.props.onSubmit({
  //   firstName: '',
  //   lastName: '',
  //   userName: '',
  //   email: '',
  //   password: ''
  // })
};

  render () {
    return (
      <form>
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.setState({ firstName: e.target.value})}
        />
        <br />
        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="lastName"
          value={this.state.lastName}
          onChange={e => this.setState({ lastName: e.target.value})}
        />
        <br />
        <label>User Name</label>
        <input
          name="userName"
          placeholder="userName"
          value={this.state.userName}
          onChange={e => this.setState({ userName: e.target.value})}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value})}
        />
        <br />
        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value})}
        />
        <br />
        <Button onClick={this.handleSubmit} color="primary">Valider</Button>
      </form>
    );
  }
}

export default FormOnSubmit;
