#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv
const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

const server = createServer()

server.on('request', (req, res) => {
  get('https://reddit.com', (err, _, body) => {
  	const $ = load(body)
  	const siteTitle = $('title')
  	// console.log("siteTitle", siteTitle);
  	console.log("body", body);
  
  res.end(JSON.stringify(body))
  })
})

server.listen(8080)