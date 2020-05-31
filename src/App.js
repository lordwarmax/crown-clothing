import React from 'react';
import {Switch, Route } from 'react-router-dom';
 
import './App.css';
import HomePAge from './pages/homepage/homepage.component';

const HatsPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePAge}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
