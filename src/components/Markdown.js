import React, { createElement, Component } from 'react'
import PropTypes from 'prop-types'
import marksy from 'marksy'

const compile = marksy({
  createElement,
})

export default class Markdown extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props
    return <div>{compile(children).tree}</div>
  }
}
