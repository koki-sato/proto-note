import * as path from 'path'
import * as puppeteer from 'puppeteer'

const URL = process.env.SERVER_URL as string

export const checkReport = async (uuid: string) => {
  puppeteer
    .launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox']
    })
    .then(async (browser) => {
      console.log(`Admin: see ${path.join(URL, 'notes', uuid)}`)

      const page = await browser.newPage()
      await page.setViewport({ width: 720, height: 600 })

      await page.goto(path.join(URL, 'login'), { waitUntil: 'networkidle0' })
      await page.type('input#name', 'admin')
      await page.type('input#password', process.env.ADMIN_PASSWORD as string)
      await page.click('#app > div > form > button')
      await page.waitForNavigation({ waitUntil: 'networkidle0' })

      await page.goto(path.join(URL, 'notes', uuid), { waitUntil: 'networkidle0' })
      browser.close()
    })
}
