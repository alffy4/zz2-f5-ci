import React from 'react'
import styled from 'react-emotion'
import * as presentations from 'scenes/presentations'
import Layout from 'components/Layout'
import Pdf from 'icons/pdf'

const publicUrl = process.env.PUBLIC_URL

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

const ExerciceContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  marginLeft: 3,
  marginRight: 3,
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
  <Layout>
    <Items>
      {Object.values(presentations).map(({ name, Exercice }) => (
        <Item key={name}>
          <ImageContainer>
            <a
              href={`${publicUrl}/presentations/${name}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={`${publicUrl}/thumbnails/${name}.jpg`} alt={name} />
            </a>
            <PdfLink
              href={`${publicUrl}/presentations/${name}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PdfIcon />
            </PdfLink>
          </ImageContainer>

          {Exercice && (
            <ExerciceContainer>
              <a
                href={`${publicUrl}/exercices/${name}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PdfIcon />
              </a>
              <a
                href={`${publicUrl}/exercices/${name}/`}
                style={{ marginLeft: 5 }}
              >
                Exercice
              </a>
            </ExerciceContainer>
          )}
        </Item>
      ))}
    </Items>
  </Layout>
)
