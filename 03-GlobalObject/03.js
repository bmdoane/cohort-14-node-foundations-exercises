#!/usr/bin/env node
'use strict';

// console.log(`Node.js version ${process.versions.node}`)
// console.log(`v8 version ${process.versions.v8}`)


// Goal 1
// Use an ES6 Template Literal and its string interpolation feature
// process.stdout.write(`Node.js version ${process.versions.node}\n`)
// process.stdout.write(`v8 version ${process.versions.v8}\n`)


// Goal 2
// Use a single call to console.log
// process.stdout.write(`Node.js version ${process.versions.node}\nv8 version ${process.versions.v8}\n`)


// Goal 3
// Use ES6 Destructuring Assignment to extract the two variables from the versions object
// This is dependant on running the 6.4v of node (where ES6 is used)
const {node, v8} = process.versions
console.log("node", node)
console.log("v8", v8)