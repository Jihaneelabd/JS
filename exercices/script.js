
// ex1
// let name = prompt("Enter your name: ") ;
// alert("Hello, " + name);
// ex2
// let age = prompt("enter your age:");
// if (age >= 18){
//    let isEligible = confirm("You are eligible to vote.");
// }
// else{
//     let isEligible = confirm("You are not eligible to vote.");
// }
// alert (isEligible);
// ex3
// let color = prompt("Enter your favorite color: ");
// if (color=="blue"){
//     alert("Blue is a cool color!");
// } 
// else{
//     alert("this is a bad color");
// }
// ex4
// let score = 0;
// if (confirm("Do you want to play a game?")) {
//     score++;
    
// }
// if (confirm("Is the sky blue?")) {
//         score++;
//     }
// alert("Your score is: " + score);
// loops 
// EX1:(for loop)
    // for(let i =1; i <= 10; i++){
    //     console.log(i);
    // }
// EX2:
    // var sum = 0;
    // for(let i = 1; i <= 100; i++){
    //     sum += i;
    // }
    // console.log("la somme : ", sum);
// EX3:
    // var nbr= 2;
    // for(let i = 1; i <= 10; i++){
    //     console.log(`${nbr} x ${i} = ${nbr * i}`);
    // }
// EX4:
    // for(let i = 1; i <= 20; i++){
    //     if(i % 2 === 0){
    //         console.log(i);
    //     }
    // }
// EX5:
    // for(let i = 1; i <= 30; i++){
    //     if(i % 3 === 0 && i % 5 === 0){
    //         console.log("FizzBuzz");
    //     }
    //     else if(i % 3 === 0){
    //         console.log("Fizz");
    //     }
    //     else if(i % 5 === 0){
    //         console.log("Buzz");
    //     }
    
    // }
// EX6:(while loop)
    // var i = 10;
    //     while(i>=1){
    //         console.log(i);
    //         i--;
    //     }
// EX7:
    // var n = 51;
    // while(n <= 100){
    //     if(n%7===0){
    //         console.log(n);
    //     }
    //     n++;
    // }
// EX8:
    // var result = 1;
    // var i = 1;
    // while(i <= 8){
    //     result *= 2;
    //     i++;
    // }
    // console.log(result);

// Ex9: (Switch case)
    // var data = [15,18,19,20];
    // switch(true){
    //     case data.includes(15):
    //         console.log("Kayna");
    //         break;
    //     default:
    //         console.log("Makaynch");
    // 
// Ex10:
    var x = prompt("Enter a number: ");
    switch(x){
        case 5:
            console.log("Sa9at");
            break;
        case 10:
            console.log("Passable");
            break;
        case 20:
            console.log("Naj7");
            break;
        default:
            console.log("Evv");
            
    }
