import React from 'react'
import styled from 'react-emotion'
import Github from 'icons/Github'
import AddComment from 'icons/AddComment'

const publicUrl = process.env.PUBLIC_URL

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

const AddCommentIcon = styled(AddComment)({
  height: 32,
  color: '#fff',
  marginRight: 20,
})

export default () => (
  <Container>
    <a href={`${publicUrl}/`} style={{ textDecoration: 'none' }}>
      <Title>Continuous integration</Title>{' '}
    </a>
    <div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfckP7ZScyJC_OSvDR2ljaP-8wzxNDE8isVM8xC92lB6q-0Vw/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AddCommentIcon />
      </a>
      <a
        href="https://github.com/JulienUsson/zz2-f5-ci"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </div>
  </Container>
)
