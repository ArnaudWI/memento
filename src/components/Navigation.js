import React, { Component } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

// création du menu grâce à la navigation de react-router-dom
//NavLink permet d'effectuer le lien avec les routes situé dans le composant lié à la navigation (App.js dans le cas)
// ATTENTION ici le NavLink a été transformé en RRNavLink pour être utilisé par reactstrap
// on introduit le NavLink dans le composant souhaité en mettant tag={RRNavLink}
// to="url" correspond au href="" pour être redirigé vers l'url souhaité
class Navigation extends Component {
  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{marginLeft: '10%'}} tag={RRNavLink} to="/">Memento Navigation et Formulaires</NavbarBrand>
            <Nav style={{marginLeft: '50%'}} navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" activeClassName="active">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
