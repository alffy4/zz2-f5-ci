import React from 'react'
import Markdown from 'components/Markdown'

const Exercice = () => (
  <Markdown>{`
# test

test
`}</Markdown>
)

export default {
  name: 'presentation',
  url: '/exercices/presentation',
  Exercice,
}
