// Chapter 1

// Ques1
let a = "Rasid"
let b = 6;
// console.log(a+b)

// Ques 2
// console.log(typeof(a+b))

// Ques 3 - can you re assign into a const object ??
const ab = {
    name : "Rasid",
    isPrincipal : false
}
// console.log(ab)
// ab = "Khan"
// console.log(ab)

// Ques 4 -- can you re assign value inside a const object ??
ab["friend"]="Alok";
// console.log(ab)
ab["friend"]="Subham";
// console.log(ab)


// Ques 5
const dict ={
    yakka : "hardwork",
    appreciate : "recognixe the full worth"
}
console.log(dict.yakka)
console.log(dict["yakka"])
