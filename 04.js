#!/usr/bin/env node --harmony_destructuring
"use strict";
// Using the --harmony_destructuring works for v4, but not v6.  Takes manual edit

// Logging is the one way to see global object
// console.log(global);

// Main goals
// process.stdout.write(`Node.js version: ${process.versions.node}\n`)
// process.stdout.write(`V8 version: ${process.versions.v8}\n`)

const {node, v8} = process.versions
process.stdout.write(`Node version: ${node}\n`)
process.stdout.write(`v8 version: ${v8}\n`)