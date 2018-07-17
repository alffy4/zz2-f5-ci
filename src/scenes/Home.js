import React, { Fragment } from 'react'
import styled from 'react-emotion'
import * as presentations from 'scenes/presentations'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Pdf from 'icons/pdf'

const Items = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 20,
  paddingBottom: 20,
})

const Item = styled('div')({
  width: 300,
  marginTop: 20,
  marginRight: 25,
  marginBottom: 20,
  marginLeft: 25,
})

const ImageContainer = styled('div')({
  position: 'relative',
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

const Tags = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 5,
})

const Tag = styled('div')({
  backgroundColor: '#2196F3',
  color: '#fff',
  margin: 3,
  padding: 5,
})

const PdfLink = styled('a')({
  position: 'absolute',
  bottom: 5,
  right: 5,
  padding: 10,
})

const PdfIcon = styled(Pdf)({
  height: 24,
})

export default () => (
  <Fragment>
    <Header />
    <Items>
      {Object.values(presentations).map(({ name, tags }) => (
        <Item key={name}>
          <ImageContainer>
            <a
              href={`/presentations/${name}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`${process.env.PUBLIC_URL}/assets/thumbnails/${name}.jpg`}
                alt={name}
              />
            </a>
            <PdfLink
              href={`${process.env.PUBLIC_URL}/assets/pdf/${name}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PdfIcon />
            </PdfLink>
          </ImageContainer>

          {tags && <Tags>{tags.map(tag => <Tag key={tag}>#{tag}</Tag>)}</Tags>}
        </Item>
      ))}
    </Items>
    <Footer />
  </Fragment>
)
