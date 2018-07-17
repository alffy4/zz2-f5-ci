import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import marksy from 'marksy'
import Layout from 'components/Layout'

const compile = marksy({
  createElement,
})

const Container = styled('div')({
  paddingTop: 20,
  paddingRight: 20,
  paddingBottom: 20,
  paddingLeft: 20,
})

const Markdown = ({ children }) => (
  <Layout>
    <Container>{compile(children).tree}</Container>
  </Layout>
)

Markdown.propTypes = {
  children: PropTypes.node,
}

export default Markdown
