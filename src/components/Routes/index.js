import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../../pages/Home'
import About from '../../pages/About';
import Contact from '../../pages/Contact'
import Programs from '../../pages/Programs'
import Resources from '../../pages/Resources'
import MeetTheITOs from '../../pages/MeetTheITOs'



function index() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/meettheitos" exact component={MeetTheITOs} />
            <Route path="/programs" exact component={Programs} />
            <Route path="/resources" exact component={Resources} />
        </Switch>
    )
}

export default index
