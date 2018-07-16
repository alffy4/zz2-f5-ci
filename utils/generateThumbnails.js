import 'fake-dom'
import puppeteer from 'puppeteer'
import * as presentations from 'scenes/presentations'

const main = async () => {
  const browser = await puppeteer.launch()
  for (const { url, name } of Object.values(presentations)) {
    const page = await browser.newPage()
    const gotoUrl = `http://localhost:3000${url}`
    try {
      await page.goto(gotoUrl)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(
        `${gotoUrl} unreachable, have you start your dev server with \`yarn start\`?`
      )
      process.exit(1)
    }
    await page.screenshot({
      path: `${__dirname}/../src/assets/thumbnails/${name}.jpg`,
    })
  }
  await browser.close()
}

main()
