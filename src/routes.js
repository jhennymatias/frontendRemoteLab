import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import MainStudent from './pages/mainStudent'
import WebcamCapture from './pages/teste';
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/mainstudent" component = {MainStudent}/>
                <Route path = "/web" component = {WebcamCapture}/>
            </Switch>
        </BrowserRouter>
    );
}