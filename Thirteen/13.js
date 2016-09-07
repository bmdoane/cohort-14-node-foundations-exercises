#!/usr/bin/env node
"use strict"

const [,, ...args] = process.argv
const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

const server = createServer()

// Moved into own folder, returning title to browser.
server.on('request', (req, res) => {
  get('https://reddit.com', (err, _, body) => {
  	const $ = load(body)
  	const siteTitle = $('title')
      .toArray()
      .map($)
      .map(el => ({
        title: el.text(),
        link: el.attr('href')
      }))

  	res.end(JSON.stringify(siteTitle))

  })
})

server.listen(8080)
