#!/usr/bin/env node
"use strict";
// To see the global object
// console.log(global)

// FS for FileSystem module
const fs = require('fs');

// Args - file, encoding
// If options is a string, then it specifies the encoding
let myJson = fs.readFileSync(process.argv[2], 'utf-8')

process.stdout.write(`${myJson}\n`)


// Bonus - are these satisfied??
// ES6 Object Destructuring
// Avoid .toString. Return a String primitive rather than a Buffer object from readFileSync
