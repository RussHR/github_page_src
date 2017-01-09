import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import CreditKarmaPage from './components/pages/CreditKarmaPage';
import GranicusPage from './components/pages/GranicusPage';
import Home from './components/Home';
import MainLayout from './components/layout/MainLayout';

import HomageToBarraganPage from './components/pages/HomageToBarraganPage';
import Autobiography1Page from './components/pages/Autobiography1Page';
import OrthofloatPage from './components/pages/OrthofloatPage';
import TrendtrendPage from './components/pages/TrendtrendPage';

import LinksContactPage from './components/pages/LinksContactPage';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home} />
                    <Redirect from="about" to="/" />

                    <Route path="play/homage-to-barragan" component={HomageToBarraganPage} />
                    <Route path="play/autobiography-1" component={Autobiography1Page} />
                    <Route path="play/orthofloat" component={OrthofloatPage} />
                    <Route path="play/trendtrend" component={TrendtrendPage} />

                    <Route path="work/credit-karma" component={CreditKarmaPage} />
                    <Route path="work/granicus" component={GranicusPage} />

                    <Route path="links-contact" component={LinksContactPage} />

                    <Route path="*" component={Home} />
                </Route>
            </Router>
        );
    }
}
