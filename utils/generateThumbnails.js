import 'fake-dom'
import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import snakeCase from 'lodash/snakeCase'

const getPresentations = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.join(__dirname, '..', 'src', 'scenes', 'presentations'),
      (errors, files) => {
        if (errors) {
          reject(errors)
        } else {
          resolve(files.filter(n => !n.includes('.js')).map(snakeCase))
        }
      }
    )
  })
}

const main = async () => {
  const presentations = await getPresentations()
  const browser = await puppeteer.launch()
  for (const name of presentations) {
    const page = await browser.newPage()
    const gotoUrl = `http://localhost:3000/presentations/${name}/#/?export`
    try {
      await page.goto(gotoUrl)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`${gotoUrl} unreachable`)
      process.exit(1)
    }

    await page.setViewport({
      height: 400,
      width: 600,
    })
    await page.screenshot({
      path: `${__dirname}/../public/thumbnails/${name}.jpg`,
      type: 'jpeg',
    })
  }
  await browser.close()
}

main()
