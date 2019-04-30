import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Navigation from "./components/Navigation";

// Utilisation de l'outil react-router-dom pour la Navigation et l'affichage des Composants
// BrowserRouter sert pour base aux routes
// Route avec path pour l'url et component pour le choix du composant à afficher
// exact pour faire afficher seulement le composant lorsque l'url est exactement ce qui a dans le path
// Route sans path pour gérer les erreurs d'url comme 404 par exemple
// Switch permet la correction du bug suite au déploiement de la route pour les erreurs
// On peut introduire d'autres composants (navigation menu, header, footer...) qui seront affiché h24 en les mettants en dehors du switch 

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
