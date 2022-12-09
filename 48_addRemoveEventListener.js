
// this argument we are passing through function is not mandatory to pass, But contains lots of info . 
let x = function (event) {
    // console.log(event.target)
    // console.log(event.type, event.clientX, event.clientY)
    alert("Hello World1!")
}
let y = function (e) {
    console.log(e)
    alert("Hello World2!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("What is your favorite number?");
if (a == "2") {
  btn.removeEventListener('click', x)
  // In removeEventListener if we pass direct function then event will not be removed 
  // because removeEvent create new function object thats why we create a variable for storing function
}
