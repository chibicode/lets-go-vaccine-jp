import { url } from '../../../lib/constants'
import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

async function screenshot(url) {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
      }
    : {
        args: [],
        executablePath:
          process.platform === 'win32'
            ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
            : process.platform === 'linux'
            ? '/usr/bin/google-chrome'
            : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      }
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 600, deviceScaleFactor: 2 })
  await page.goto(url, {
    waitUntil: process.env.AWS_REGION ? 'networkidle0' : 'load'
  })
  await page.waitForSelector('#share')
  return await page.screenshot({ type: 'png' })
}

export default async function og(_, res) {
  const file = await screenshot(
    `${process.env.AWS_REGION ? url : 'http://localhost:3000'}/?share=1`
  )
  res.setHeader('Content-Type', `image/png`)
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  )
  res.statusCode = 200
  res.end(file)
}
