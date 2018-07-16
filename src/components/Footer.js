import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')({
  marginTop: 70,
  marginBottom: 15,
  textAlign: 'center',
})

export default () => (
  <Container>
    Made with love{' '}
    <span role="img" aria-label="Heart">
      ♥️
    </span>{' '}
    by <a href="https://julienusson.github.io/">Julien Usson</a> using{' '}
    <a href="https://reactjs.org/">React</a> and{' '}
    <a href="https://github.com/FormidableLabs/spectacle/">Spectacle</a>
  </Container>
)
