import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
