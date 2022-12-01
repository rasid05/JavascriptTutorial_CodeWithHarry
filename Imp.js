// JS Numbers (+0, -0, NaN)
let v = 0
let x = +0
let y = -0
let z = NaN
// console.log(v + x + y)
// console.log("Integer + NaN =", v + z)
// console.log("0 = ", v)
// console.log("-0 = ", y)
// console.log("+0 = ", x)
// console.log(z)


// Type conversion 
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));
let date = String(new Date());
// console.log(date, (typeof date));
let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, (typeof arr));
let i = 75;
// console.log(i.toString())
// let stri = Number("3434");
// stri = Number("343d4");
// stri = Number(false);
// stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(stri, (typeof stri));
let number = parseFloat('34.098');
// number = parseInt('34.098')
// console.log(number, number.toFixed(2), (typeof number));


// Type coercion
let mystr = Number("698");
let mynum = 34;
console.log(mystr + mynum);
