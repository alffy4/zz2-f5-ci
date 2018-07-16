import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Text = styled('div')({
  textAlign: 'center',
  fontSize: '48px',
  color: '#263238',
})

export default () => (
  <Container>
    <Text>404 - Not Found</Text>
  </Container>
)
