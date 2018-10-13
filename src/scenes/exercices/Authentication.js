/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°5 : Authentification !

Ajouter une authentification à votre site :
 * Connexion
 * Inscription
 * Rôles (Admin, User)

## Autres ressources

 * [Session-based vs Token-based Authentication](https://security.stackexchange.com/a/92123) [EN]
 * [OAuth 2](http://www.bubblecode.net/fr/2016/01/22/comprendre-oauth2/) [FR]
 * [OAuth 2](https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66) [EN]
 * [JWT](https://jwt.io) [EN]
`}</Markdown>
)
