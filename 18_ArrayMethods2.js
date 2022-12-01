// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// console.log(num)
// console.log(num.length)
// delete num[2]
// console.log(num)
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
let compare = (a, b)=>{
  return b - a // decending order
  // return a-b; // ascending
}
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let num = [-551, -22, -3, -14, 5, -6, -7, -8, -229]
// console.log(num.sort())  // one way--it treats array as string
// console.log(num)    // sort also method modify actual array

// // second way
// num.sort(compare)
// console.log(num)
// num.reverse()
// console.log(num)

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
console.log(newNum)