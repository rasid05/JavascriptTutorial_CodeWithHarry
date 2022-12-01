// 7 Premitive DataType
// nn bb ss u
let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Rasid";
let f = Symbol("I am a nice Symbol");
let g = undefined;
// console.log(a, b, c, d, e, f, g)


// Non Premitive DataType -> Object
const item = {
    "Rasid": true,
    "Subham": false,
    Alok: 67,
    "Zafar": undefined
}
console.log(item)
console.log(item["Rasid"])
console.log(item["Zafar"])
console.log(item["iofhurhfeiu"]) // not present in object

console.log(item.Alok)
// console.log(item[Alok]) //will give error
console.log(item["Alok"])
