import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {UserContextProvider} from './contexts/userContext'


import Navbar from './components/Navbar/Navbar'

import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Home from './components/pages/Home';
import DonateDetail from './components/pages/DonateDetail/DonateDetail';
import Donate from './components/pages/Donate';
import RaiseFund from './components/pages/RaiseFund';
import Profile from './components/pages/Profile/Profile';
import NewFund from './components/pages/NewFund/NewFund';

import ScrollIntoView from "./components/ScrollIntoView";
import ViewFund from './components/pages/ViewFund/ViewFund';

function App() {
  return (
    <>
      <UserContextProvider>
      <Router>
        <Navbar/>
        <ScrollIntoView>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <PrivateRoute path='/profile' exact component={Profile}></PrivateRoute>
            <PrivateRoute path='/raise-fund' exact component={RaiseFund}></PrivateRoute>
            <PrivateRoute path='/new-fund' exact component={NewFund}></PrivateRoute>
            <PrivateRoute path='/fund/:id' exact component={ViewFund}></PrivateRoute>
            <PrivateRoute path='/donate' exact component={Donate}></PrivateRoute>
            <PrivateRoute path='/donate-detail/:id' exact component={DonateDetail}></PrivateRoute>
          </Switch>
        </ScrollIntoView>
        
      </Router>
      </UserContextProvider>
     
    </>
  );
}

export default App;
