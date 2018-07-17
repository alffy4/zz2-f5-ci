import 'fake-dom'
import puppeteer from 'puppeteer'
import * as presentations from 'scenes/presentations'
import * as exercices from 'scenes/exercices'

const main = async () => {
  const browser = await puppeteer.launch()
  // Presentations
  for (const { name } of Object.values(presentations)) {
    const page = await browser.newPage()
    const gotoUrl = `http://localhost:3000/presentations/${name}/#/?export`
    try {
      await page.goto(gotoUrl)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`${gotoUrl} unreachable`)
      process.exit(1)
    }
    await page.pdf({
      path: `${__dirname}/../public/presentations/${name}.pdf`,
      printBackground: true,
      landscape: true,
      format: 'Letter',
    })
  }

  // Exercices
  for (const { name } of Object.values(exercices)) {
    const page = await browser.newPage()
    const gotoUrl = `http://localhost:3000/exercices/${name}/`
    try {
      await page.goto(gotoUrl)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`${gotoUrl} unreachable`)
      process.exit(1)
    }
    await page.pdf({
      path: `${__dirname}/../public/exercices/${name}.pdf`,
      printBackground: false,
      landscape: false,
      format: 'A4',
    })
  }
  await browser.close()
}

main()
