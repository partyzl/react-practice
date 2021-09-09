import React from 'react';
import { Switch, Route } from 'react-router';
import {TopOfPage} from './layout'
import {About, Home, Main} from './pages'


function App(){
    return(
        <>
        <TopOfPage />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path = "/main" component={Main}/>
            <Route path = "/about" component = {About}/>
        </Switch>
        </>
    );
};

export default App;