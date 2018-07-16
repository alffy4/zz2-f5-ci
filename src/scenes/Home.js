import React from 'react'
import styled from 'react-emotion'
import * as presentations from 'scenes/presentations'

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 30,
  paddingBottom: 30,
})

const Item = styled('div')({
  width: 300,
  marginTop: 20,
  marginRight: 25,
  marginBottom: 20,
  marginLeft: 25,
})

const Image = styled('img')({
  height: 200,
  width: 300,
  padding: 5,
  backgroundColor: '#fff',
  borderRadius: 4,
  boxShadow:
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
})

const Title = styled('div')({
  marginTop: 5,
  marginLeft: 3,
  marginRight: 3,
})

const Description = styled('div')({
  fontWeight: 200,
  marginLeft: 3,
  marginRight: 3,
  fontSize: 14,
})

const Tags = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const Tag = styled('div')({
  backgroundColor: '#2196F3',
  color: '#fff',
  margin: 3,
  padding: 5,
})

export default () => (
  <Container>
    {Object.values(presentations).map(
      ({ name, title, description, url, tags }) => (
        <Item key={name}>
          <a href={`${url}/`}>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/thumbnails/${name}.jpg`}
              alt={title}
            />
          </a>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
        </Item>
      )
    )}
  </Container>
)
