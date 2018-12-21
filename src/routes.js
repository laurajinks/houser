import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';
import HouseListing from './components/HouseListing';

export default (
    <Switch>
        <Route path='/wizardone' component={WizardOne}/>
        <Route path='/wizardtwo' component={WizardTwo}/>
        <Route path='/wizardthree' component={WizardThree}/>
        <Route path='/houselisting/:id' component={HouseListing}/>
        <Route exact path='/' component={Dashboard}/>
    </Switch>
)