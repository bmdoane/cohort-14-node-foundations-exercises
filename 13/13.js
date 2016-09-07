#!/usr/bin/env node
"use strict"

const [,, ...args] = process.argv
const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

const server = createServer()

// CLI takes arg http://reddit.com
get(args[0], (err, _, body) => {
	const $ = load(body)
	const siteTitle = $('title')
  process.stdout.write(`${siteTitle[0].children[0].data}\n`)
  process.exit()

})

server.listen(8080)
