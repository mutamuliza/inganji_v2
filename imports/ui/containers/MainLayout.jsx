import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Login from '../pages/login.jsx';
import Create from '../pages/CreateAccount.jsx';
import availablebus from '../pages/availablebus.jsx';
import Seats from '../pages/Seats.jsx';
import Cart from '../pages/Cart.jsx';
import Bookandbuy from '../pages/bookandbuy.jsx';
import Pay from '../pages/pay.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Header2 />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route path = '/login' component={Login} />
              <Route path = '/create' component={Create} />
              <Route path = '/availablebus' component={availablebus} />
              <Route path = '/seats' component={Seats} />
              <Route path = '/cart' component={Cart} />
              <Route path = '/bookandbuy' component={Bookandbuy} />
              <Route path = '/pay' component={Pay} />
            </Switch>
        </div>
      </Router>
    );
  }
}
