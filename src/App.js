import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Button } from 'bootstrap';
import {UserContextProvider} from './contexts/userContext'

import { ModalLogin } from './components/Modal/ModalLogin'
import Navbar from './components/Navbar/Navbar'

import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Home from './components/pages/Home';
import DonateDetail from './components/pages/DonateDetail/DonateDetail';
import Profile from './components/pages/Profile/Profile';




function App() {
  return (
    <>
      <UserContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <PrivateRoute path='/donate-detail/:id' exact component={DonateDetail}></PrivateRoute>
          <PrivateRoute path='/profile' exact component={Profile}></PrivateRoute>
          
        </Switch>
      </Router>
      </UserContextProvider>
     
    </>
  );
}

export default App;
