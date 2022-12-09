// // Q 2
// let op = document.getElementById("google")
// op.addEventListener("click", function () {
//     console.log("Here")
//     window.location = "https://www.google.com";
//     win.focus();

// })



// // Q 4
// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)


// // Q 5
// let tog = document.querySelector("#tog")
// let bulbcontainer = document.querySelector(".bulbcontainer")
// tog.addEventListener('click',function(){
//     bulbcontainer.classList.toggle("bulb")
// })
// // OR
setInterval(function () {
    document.querySelector(".bulbcontainer").classList.toggle("bulb")
}, 300)
