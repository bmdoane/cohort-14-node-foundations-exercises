#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv;
const { get } = require('request')
const url = `http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22${args}%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D`

// This will return the url data in terminal with CL.  The terminal environment is aware of itself and all results may not be printed, but are referenced.
get(url, (err, res, body) => {	
	let stockData = JSON.parse(body)
	let myStockValues = stockData.Elements[0].DataSeries.close.values
	let sum = myStockValues.reduce( (prev, curr) => prev + curr )
	let stockAvg = (sum/myStockValues.length).toFixed(2)
	console.log("avg", stockAvg);

})

