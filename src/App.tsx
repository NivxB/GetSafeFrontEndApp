import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devInsurance} />
          </Route>

          <Route path="/buy/insurance_designer">
            <Buyflow productId={ProductIds.designerInsurance} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started! - Developer</Link>
            <br />
            <Link to="/buy/insurance_designer">Get started! - Designer</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
