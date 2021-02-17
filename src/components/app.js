import React, { Component } from 'react';

//component imports 
import NavBar from './navigation/navbar'
import Login from './login/login'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <NavBar />
      <Login />
      </div>
    );
  }
}
