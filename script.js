// declaration de variable var/let/const 
var x = 5;
var x = 10;
console.log(x);

let y = 5;
 y = 12;
console.log("La valeur de y est ", y);
// les methodes de console 
console.log("Hello World");
console.error("This is an error message.");
console.warn("This is a warnning message.");
console.info("This is an information message.");
// alert / prompt / confirm 


/*alert("Hello from alert");
prompt("Entrer votre Note ");
confirm("Are you sure");
*/
// var z = "Jihane"
// console.log(typeof z);
// var note = [18,17,10];
// console.log(note[2])
// var data = {name : "Jihane" , age: 20}
// var ecole = {students : { name:"Moha",age : 28}, code: 18};
// console.log(data.age)
// console.log(ecole.students.age);

var note = prompt("Entrer votre note");
// if (note < 0 && note > 20){
//     console.log("Impossible")
// }
 if( note > 0 && note < 7 ){
    console.log("Non validé")
}
else if ( note > 7 && note  < 10 ){
    console.log("Ratrrapage")
}
else if ( note > 10 && note < 20 ) {
    console.log("Validé")
} 
else {
    console.log("Impossible");
}      