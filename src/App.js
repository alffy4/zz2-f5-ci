import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import * as presentations from './presentations'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.entries(presentations).map(([routeName, Component]) => (
        <Route key={routeName} exact path={`/${routeName}`} component={Component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
