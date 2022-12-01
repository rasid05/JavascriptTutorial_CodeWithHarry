
// Problem 1 , 2 , 3
let runAgain = true;
while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)
if (age < 0) {
    console.error("Invalid age")
    break;
}
const canDrive = (age)=>{
    return age >= 18 ? true:false
}
if (canDrive(age)) {
    console.log("You can Drive")
}else{
    console.log("You can't Drive")
}
runAgain= confirm("Wanna Play again")
}

// Problem 4
let n = prompt("Enter a Number")
n = Number.parseInt(n)
if (n>4) {
    location.href = "https://google.com"
}


// Problem 5
let color = prompt("Enter the page color")
document.body.style.background = color