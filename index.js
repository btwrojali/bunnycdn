import fetch from 'node-fetch'
import cheerio from 'cheerio'

const response = await fetch('https://www.pokerclub88sky.com')

const html = await response.text()

const $ = cheerio.load(html)

console.log($('h1'))
