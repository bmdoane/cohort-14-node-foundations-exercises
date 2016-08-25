#!/usr/bin/env node
"use strict";

// What the rest paramter (...) does
// var [,, ...argv] = process.argv
// var argv = process.argv.slice(2)

// Accessing command line arguments via global.process.argv
// Using filter() here would allow for grabing array[2] and beyond
const [,, ...args] = process.argv;

// Return a command line argument - ./05.js 1
// process.stdout.write(`${args}\n`)


// Reduce 3 command line arguments - ./05.js -.42 0 3.14
// Arguments in the terminal are returned as a string
let addEmUp = args
								.map(arg => parseFloat(arg))
								.reduce((a,b) => a+b);
// Console.log does not work with ES6									
process.stdout.write(`${addEmUp}\n`);


// Trying to make value 0 if no args passed.  Not working yet.
// const test = (args) => {
// 	if (args.length === 0) {
// 		addEmUp = 0
// 	}
// }

// Still need to do bonus goals on this.