import React from 'react'
import styled from 'react-emotion'
import Github from 'icons/Github'

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#2196F3',
  paddingTop: 15,
  paddingRight: 30,
  paddingBottom: 15,
  paddingLeft: 30,
  '@media print': {
    display: 'none',
  },
})

const Title = styled('div')({
  color: '#fff',
  fontSize: 24,
  fontWeight: 700,
})

const GithubIcon = styled(Github)({
  height: 32,
  color: '#fff',
})

export default () => (
  <Container>
    <a href="/" style={{ textDecoration: 'none' }}>
      <Title>Continuous integration</Title>{' '}
    </a>
    <a
      href="https://github.com/JulienUsson/zz2-f5-cours"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
  </Container>
)
