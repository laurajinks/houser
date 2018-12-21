import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import House from './components/House';
import Wizard from './components/Wizard';

export default (
    <Switch>
        <Route path='/house' component={House}/>
        <Route path='/wizard' component={Wizard}/>
        <Route exact path='/' component={Dashboard}/>
    </Switch>
)