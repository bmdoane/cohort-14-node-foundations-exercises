#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv
const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

const server = createServer()
const url = `${args}`

// server.on('request', (req, res) => {
//   get('https://reddit.com', (err, _, body) => {
//   	const $ = load(body)

  	// const topStories = []
  	// for(let i = 0, titles = $('a.title'); i > titles.length; i++) {
  	// 	const $title = $(titles[i])
  	// 	topStories.push({
  	// 		title: $title.text(),
  	// 		link: $title.attr('href')
  	// 	})
  	// }

  	// const topStories = []
  	// $('a.title').each((i, title) => {
  	// 	const $title = $(title)
  	// 	topStories.push({
  	// 		title: $title.text(),
  	// 		link: $title.attr('href')  			
  	// 	})
  	// })

  	// const topStories = $('a.title')
  	// 	.toArray()
  	// 	.map($)
  	// 	.map(el => ({
  	// 		title: el.text(),
  	// 		link: el.attr('href')   			
  	// 	}))
  	// [{ title: 'Trump did stuff today', link: 'http://cnn.com'}, {title: 'Trump did even more stuff today', link: 'http://abcnews.com'}]
  	res.end(JSON.stringify(????))
  })
})

server.listen(8080)