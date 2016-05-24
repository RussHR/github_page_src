import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import CreditKarmaPage from './components/CreditKarmaPage';
import GranicusPage from './components/GranicusPage';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import OrthofloatPage from './components/OrthofloatPage';
import TrendtrendPage from './components/TrendtrendPage';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home} />
                    <Redirect from="about" to="/" />

                    <Route path="work/credit-karma" component={CreditKarmaPage} />
                    <Route path="work/granicus" component={GranicusPage} />
                    <Route path="play/orthofloat" component={OrthofloatPage} />
                    <Route path="play/trendtrend" component={TrendtrendPage} />
                    <Route path="links-contact" component={Home} />

                    <Route path="*" component={Home} />
                </Route>
            </Router>
        );
    }
}
