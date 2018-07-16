import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'
import * as presentations from 'scenes/presentations'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.values(presentations).map(({ name, url, Presentation }) => (
        <Route key={name} exact path={url} render={Presentation} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
