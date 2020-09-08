import React, { Fragment, Component } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBarMemu from './components/header';
import FooterBar from './components/footer';
import Home from './Home';
import Design from './Design';
import Laser from './Laser';
import Press from './Press';
import Flex from './Flex';
import Weld from './Welding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <Fragment>
        <NavBarMemu />
        <Router>
          <Home path="/" />
          <Design path="/Design" />
          <Laser path="/Laser" />
          <Press path="/Press" />
          <Flex path="/Flex" />
          <Weld path="/Weld" />
        </Router>
        <FooterBar />
      </Fragment>
    );
  }
}

export default App;
