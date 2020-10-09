import React, { lazy } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = lazy(()=>import('../pages/HomePage'));

export default function Routers(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/home" component={HomePage}/>
            </Switch>
        </Router>
    )
}