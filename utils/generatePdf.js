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
    await page.goto(`http://localhost:3000/${routeName}/#/?export`)
    await page.pdf({
      path: `${__dirname}/../src/assets/pdf/${routeName}.pdf`,
      printBackground: true,
      landscape: true,
      format: 'Letter',
    })
  }
  await browser.close()
}

main()
