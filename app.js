const ss = require('lodash')
const item =[1,[2,[3,[4]]]]
const newItems = ss.flattenDeep(item)
console.log(`Flattened array: ${newItems}`) // Outputs [1