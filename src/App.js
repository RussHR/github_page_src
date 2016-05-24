import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import CreditKarmaPage from './components/CreditKarmaPage';
import MainLayout from './components/MainLayout';
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home} />
                    <Redirect from="about" to="/" />

                    <Route path="work/credit-karma" component={CreditKarmaPage} />
                    <Route path="work/granicus" component={Home} />
                    <Route path="play/orthofloat" component={Home} />
                    <Route path="play/trendtrend" component={Home} />
                    <Route path="links-contact" component={Home} />

                    <Route path="*" component={Home} />
                </Route>
            </Router>
        );
    }
}
