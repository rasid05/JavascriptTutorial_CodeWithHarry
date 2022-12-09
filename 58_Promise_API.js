let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2");
        // reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

/*
p1.then((value) => {
        console.log(value)
})
p2.then((value) => {
        console.log(value)
})
p3.then((value) => {
        console.log(value)
})
*/
// let promise_all = Promise.all([p1, p2, p3])  //This will print only if all promises are done but if one error come whole thing will print erroe
// let promise_all = Promise.allSettled([p1, p2, p3])  // it will solve previous problem
// let promise_all = Promise.race([p1, p2, p3])  // return 1st resolve value but if that value reject then it will show error
// let promise_all = Promise.any([p1, p2, p3])  // return 1st resolved value 
let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
    console.log(value)
})