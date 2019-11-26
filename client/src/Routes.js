import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout'
import Home from './components/pages/Home/Home'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Contact from './components/pages/Contact/Contact'
import About from './components/pages/About/About'

function Routes() {
    return (
        <Layout>
            <Switch>
                <Route path = '/about' exact component = {About}/>
                <Route path = '/Contact' exact component = {Contact}/>
                <Route path = '/Portfolio' exact component = {Portfolio}/>
                <Route path = '/' exact component = {Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes