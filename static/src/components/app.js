import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
//component imports
import NavBar from './navigation/navbar'
import Home from './pages/home'
// import About from './pages/about'
import MyFooter from './bottom/myFooter'
// import UpcomingEvents from './pages/upcomingEvents'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <NavBar />
        <Home />
        <MyFooter />
      </Fragment>
    )
  }
}
