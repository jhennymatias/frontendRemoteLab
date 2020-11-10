import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import MainStudent from './pages/mainStudent'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/mainstudent" component = {MainStudent}/>
            </Switch>
        </BrowserRouter>
    );
}