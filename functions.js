/*
const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();

const addHotWater = () => {
    console.log("Adding hot water to the beans")
}

addHotWater ()

const pourCoffee = () => {
    console.log("pouring coffee into cup")
}

pourCoffee ()

const addMilk = () => {
    console.log ("adding milk to coffee")
}

addMilk ()

const drink = () => {
    console.log("drink the coffee")
}

drink ()
*/

/*
let coffeeIsGrinding = false

const pressGrindBeans = () => {   
    if (coffeeIsGrinding == true) {
    console.log("stop the grinding");
    coffeeIsGrinding = false
} else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true
}
}   

pressGrindBeans();
*/

/*
const cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, 25698421)
*/

/*
const takeOrder = (size, drinktype) => {
    console.log(`you have ordered ${size} ${drinktype}`)
}

takeOrder(`large`, `coffee`);
*/

/*
let kalacc = 50449921

const cashWithdrawal = (amount, accnum) => {
    console.log(`withdraw ${amount} from account ${accnum}`);
}

cashWithdrawal(300 ,kalacc)
*/

/*
const addUp = (num1, num2) =>  {
    return num1 + num2;
}

console.log(addUp(7, 3));
console.log(addUp(2, 5))
*/

/*
const multiplyByNine = (celsius) => {
    return celsius * (9/5)
}

const getfahrenheit = (celsius) => {
    return multiplyByNine (celsius) + 32
}

console.log("the temperature is " + getfahrenheit (15) + "f")
*/

/*
function square(number) {
    return number * number;
}
square (5);
*/

/*
let orderCount = 0;

const takeOrder = (size, topping) => {
    console.log(`a ${size} pizza with ${topping}`);
    orderCount++
    console.log(orderCount);
}

takeOrder("small", "cheese")
takeOrder("large", "ham");
*/

/*
let accIsEligible
let pin = 5748
let amount = 3000

const getCashOut = () => {
  if (pin == 5748 && amount <= 3000) {
      console.log ("dispense cash");
      accIsEligible = true
   } else {
       console.log ("funds too low")
       accIsEligible = false
   }

}

getCashOut ()
*/

const sandwitch = (filling, filling1, filling2, filling3,filling4) => {
    console.log (`here is your sandwitch contaning ${filling}, ${filling1}, ${filling2}, ${filling3} and ${filling4}`)
}

sandwitch ("cheese", "ham", "chicken", "lettes", "mayo")