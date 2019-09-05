/*
for(i = 0 ; i < 10 ; i++){
    console.log(i)
}
*/

/*
for(i = 9 ; i > -1 ; i--){
    console.log(i)
}
*/

/*
let favedrinks = [
    "coffe", 
    "energy drinks", 
    "coke"
]

console.log(favedrinks[0])
console.log(favedrinks[1])
console.log(favedrinks[2])
*/

/*
let favefilms = [
    "scott pilgrrim vs the world",
    "the pick of destany",
    "baby driver",
    "at worlds end",
    "shaun of the dead"
]
*/

/*
console.log(favefilms)
*/

/*
favefilms.push("sweeney todd the demon barber of fleet street")
favefilms.push("hot fuzz")
*/

/*
console.log(favefilms)
*/

/*
for(filmindex = 0; filmindex < favefilms.length; filmindex++){
    console.log(favefilms[filmindex])
}
*/


let numbers = 50;

let currentNumber= 0;

while(currentNumber != 50){
    console.log(currentNumber);
    currentNumber= (Math.floor(Math.random()*51));
}
console.log(currentNumber);