import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'scenes/Home'
import NotFound from 'scenes/NotFound'
import * as presentations from 'scenes/presentations'
import snakeCase from 'lodash/snakeCase'

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      {Object.entries(presentations).map(([rawName, { Presentation }]) => {
        const name = snakeCase(rawName)
        return (
          <Route
            key={name}
            exact
            path={`/presentations/${name}`}
            render={Presentation}
          />
        )
      })}
      {Object.entries(presentations)
        // eslint-disable-next-line no-unused-vars
        .filter(([_, { Exercice }]) => Exercice)
        .map(([rawName, { Exercice }]) => {
          const name = snakeCase(rawName)
          return (
            <Route
              key={name}
              exact
              path={`/exercices/${name}`}
              render={Exercice}
            />
          )
        })}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
