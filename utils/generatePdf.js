import 'fake-dom'
import puppeteer from 'puppeteer'
import * as presentations from 'scenes/presentations'

const main = async () => {
  const browser = await puppeteer.launch()
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
      path: `${__dirname}/../public/assets/pdf/${name}.pdf`,
      printBackground: true,
      landscape: true,
      format: 'Letter',
    })
  }
  await browser.close()
}

main()
