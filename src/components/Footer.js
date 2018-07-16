import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')({
  marginTop: 50,
  marginBottom: 15,
  textAlign: 'center',
})

export default () => (
  <Container>
    Made with love{' '}
    <span role="img" aria-label="Heart">
      ♥️
    </span>{' '}
    by <a href="https://julienusson.github.io/">Julien Usson</a>
  </Container>
)
