// console.log(process.argv);

// for (let i = 2; i < process.argv.length; i++) {
// 	console.log(process.argv[i])
// }

// process.argv.forEach((arg, i) => {
// 	if (i > 1) {
// 		console.log(arg)
// 	}
// })

// process.argv.forEach((arg, i) => {
// 	i > 1 && console.log(arg)
// })

// process.argv.filter((arg, i) => {
// 	return i > 1
// }).forEach((arg) => {
// 	console.log(arg)
// })

// becomes

// process.argv
// 	.filter((_, i) => i > 1)
// 	.forEach(arg => console.log(arg))

// Look at return of forEach on MDN ignoring first two variables
// const [,, ...args] = process.argv
// args.forEach(arg => console.log(arg))



// Example 1
// const [,, ...args] = process.argv
// args.forEach(arg => {
// // This is not working......
// // for (let i = 0; i < arg.length; i++) {
// // 	console.log(arg[i])
// // }

// // arg.split('').forEach(char => console.log(char))

// // Array.from(arg).forEach(char => console.log(char))
// // Array.from to make a string an array
// //Array.from(document.querySelectorAll('btn))

// // Array.from = [...document.querySelectorAll('btn')]

// 	[...arg]
// 		.forEach(char => 
// 			console.log(`Give me a ${char.toUpperCase()}!`)
// 		)
// })
// console.log(`What does that spell?`)
// console.log(`${args.join(' ').toUpperCase()}!`)



// Example 2
// const [,, ...args] = process.argv
// const allCaps = args.map(arg => arg.toUpperCase())
// ;[...args.join('')].forEach(char =>
// 	console.log(`Give me a ${char}`)
// )
// console.log(`What does that spell?`)
// console.log(`${allCaps.join(' ')}!`)



// Example 3 - Adding a or an
const [,, ...args] = process.argv
const allCaps = args.map(arg => arg.toUpperCase())

// Different ways to add 'an' or 'a'
// const aOrAn = (char) => {
// 	switch(char) {
// 		case 'A':
// 		case 'E':
// 		case 'F':
// 		case 'H':
// 		case 'I':
// 		case 'L':
// 		case 'M':	
// 		case 'N':
// 		case 'O':
// 		case 'R':
// 		case 'S':
// 		case 'X':		
// 			return 'an'
// 			break 
// 		default:
// 			return 'a'	
// 	}
// };

// const aOrAn = (char) => 
// 	/[AEFHILMNORSX]/.test(char ? 'an' : 'a');

// const aOrAn = (char) =>
// 	'AEFHILMNORSX'.indexOf(char) !== -1 ? 'an' : 'a';

const aOrAn = (char) =>
	'AEFHILMNORSX'.includes(char) ? 'an' : 'a';

// forEach takes two arguments, second being a counter
[...allCaps.join('')].forEach((char, index) => { 
	setTimeout(function() {
	console.log(`Give me ${aOrAn(char)} ${char}!`)
	console.log("index", allCaps.join('').length -1);
	// index always starts at 0, setting length -1 evens counters for ternary.
	index === allCaps.join('').length -1 ? runLast() : false
	}, index*2000)
})

const runLast = () => {
	console.log(`What does that spell?`)
	console.log(`${allCaps.join(' ')}!`)
}








