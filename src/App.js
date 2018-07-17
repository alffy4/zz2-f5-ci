import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'
import * as presentations from 'scenes/presentations'

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.values(presentations).map(({ name, Presentation, Exercice }) => (
        <Fragment key={name}>
          <Route exact path={`/presentations/${name}`} render={Presentation} />
          {Exercice && (
            <Route exact path={`/exercices/${name}`} render={Exercice} />
          )}
        </Fragment>
      ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
