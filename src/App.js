import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'
import * as presentations from 'scenes/presentations'

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.values(presentations).map(({ name, Presentation }) => (
        <Route
          key={name}
          exact
          path={`/presentations/${name}`}
          render={Presentation}
        />
      ))}
      {Object.values(presentations)
        .filter(({ Exercice }) => Exercice)
        .map(({ name, Exercice }) => (
          <Route
            key={name}
            exact
            path={`/exercices/${name}`}
            render={Exercice}
          />
        ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
