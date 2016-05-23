import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import MainLayout from './components/MainLayout';
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home}/>
                    <Redirect from="about" to="/" />
                    <Route path="*" component={Home} />
                </Route>
            </Router>
        );
    }
}
