#!/usr/bin/env node
"use strict";
// FS for FileSystem module
const fs = require('fs');

// args - file, encoding, callback
// If options is a string, then it specifies the encoding
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  process.stdout.write(`${data}\n`);
});