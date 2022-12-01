let num = Math.floor(Math.random() * 100);

console.log("You have 5 chance to guess a number");
let i = 1;
do {
    let temp = prompt("Guess " + i + " : ");
    if(temp == num){
        break;
    }else if(temp < num){
        console.log("Guess a higher number")
    }else{
        console.log("Guess a lower number")
    }
    i++;
} while (i<6)

if (i < 6) {
    console.log("You Win");
}else{
    console.log("Loss.... The Number is "+num)
}
