let first = document.getElementById("first") //we can directly access the id without doing this but this is a good practice
let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)