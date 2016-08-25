#!/usr/bin/env node
"use strict";

// Grab the destination file argument
const [,, ...args] = process.argv
const fs = require('fs')
const { Transform } = require('stream')

// File to read from
const readStream = fs.createReadStream('./09.json')

const transformStream = Transform()
transformStream._transform = (buffer, _, cb) => {
	// CB - 1st arg error, 2nd arg data we want next stream to have
	cb(null, `${buffer.toString().toUpperCase()}\n`)
}
// File to write to
const writeStream = fs.createWriteStream(`${args}`)

readStream.pipe(transformStream).pipe(writeStream)
