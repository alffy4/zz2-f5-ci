import puppeteer from 'puppeteer'
import fs from 'fs'

const main = async () => {
  const files = fs
    .readdirSync(`${__dirname}/../src/presentations`)
    .filter(filename => filename !== 'index.js')
    .map(filename =>
      filename
        .split('.')
        .slice(0, -1)
        .join('.')
    )

  const browser = await puppeteer.launch()
  for (let routeName of files) {
    const page = await browser.newPage()
    await page.goto(`http://localhost:3000/${routeName}`)
    await page.screenshot({
      path: `${__dirname}/../src/assets/${routeName}.jpg`,
    })
  }
  await browser.close()
}

main()
