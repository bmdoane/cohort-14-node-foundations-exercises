#!/usr/bin/env node
"use strict";

const repl = require('repl');
const chalk = require('chalk');


// An example of using escape prefix with ANSI code
// console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!')

// Making it more readable
// const bold = string => `\u001b[1m${string}\u001b[22m`
// const green = string => `\u001b[32m${string}\u001b[39m`
// const red = string => `\u001b[31m${string}\u001b[39m`
// console.log(`It is ${red('easier')} to use ${green('functions for')} ${green(bold('ANSI'))} codes!`)

// style a string 
process.stdout.write(chalk.blue('Hello world!\n'));
 
// combine styled and normal strings 
process.stdout.write(chalk.blue('Hello') + 'World' + chalk.red('!\n'));
 
// compose multiple styles using the chainable API 
process.stdout.write(chalk.blue.bgRed.bold('Hello world!\n'));
 
// pass in multiple arguments 
process.stdout.write(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz\n'));
 
// nest styles 
process.stdout.write(chalk.red('Hello', chalk.underline.bgBlue('world') + '!\n'));
 
// nest styles of the same type even (color, underline, background) 
process.stdout.write(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!\n'
));


// chalk.styles
// Exposes the styles as ANSI escape codes.
console.log(chalk.styles.red);
//=> {open: '\u001b[31m', close: '\u001b[39m'} 
 
console.log(chalk.styles.red.open + 'Hello' + chalk.styles.red.close);


// This still needs bonus refactoring
// American Flag exercise
const flagBlue = chalk.bgBlue
const starColor = chalk.white
const flagRed = chalk.bgRed
const flagWhite = chalk.bgWhite
// To use unicode emojis it must be in ``  ES6
let star = `\u2620`

process.stdout.write(`${flagBlue(starColor(` ${star} ${star} ${star} ${star} ${star} ${star} ${star} `))}${flagRed('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(`  ${star} ${star} ${star} ${star} ${star} ${star}  `))}${flagWhite('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(` ${star} ${star} ${star} ${star} ${star} ${star} ${star} `))}${flagRed('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(`  ${star} ${star} ${star} ${star} ${star} ${star}  `))}${flagWhite('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(` ${star} ${star} ${star} ${star} ${star} ${star} ${star} `))}${flagRed('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(`  ${star} ${star} ${star} ${star} ${star} ${star}  `))}${flagWhite('                                   ')}\n`)
process.stdout.write(`${flagBlue(starColor(` ${star} ${star} ${star} ${star} ${star} ${star} ${star} `))}${flagRed('                                   ')}\n`)
process.stdout.write(`${flagWhite('                                                  ')}\n`)
process.stdout.write(`${flagRed('                                                  ')}\n`)
process.stdout.write(`${flagWhite('                                                  ')}\n`)
process.stdout.write(`${flagRed('                                                  ')}\n`)
process.stdout.write(`${flagWhite('                                                  ')}\n`)
process.stdout.write(`${flagRed('                                                  ')}\n`)
