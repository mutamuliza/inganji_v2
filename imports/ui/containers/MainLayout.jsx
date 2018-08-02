import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Header2 from '../components/Header2.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';
import availablebus from '../pages/availablebus.jsx';
import Pay from '../pages/pay.jsx';
import BookandBuy from '../pages/bookandbuy.jsx';

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
              <Route path = '/pay' component={Pay} />
              <Route path = '/bookandbuy' component={BookandBuy} />
              <Route path = '/availablebuses' component={availablebus} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
