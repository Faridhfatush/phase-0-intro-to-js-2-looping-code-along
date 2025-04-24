// Code your solutions in this file
//for loop syntax - for([initialization]; [condition]; [iteration]) {[loop body]}

//for (let age = 30; age<40; age++){
   // console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger
//}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bowl`);
      //  debugger; 
    }
    return gifts;
}

wrapGifts(gifts);
const names = ["Guadalupe", "Ollie", "Aki"];
let eventName = "suprise"
function writeCards(names, eventName){
    let message = [];
    for (let i = 0; i < names.length; i++){
        const messages = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        message.push(messages)
        debugger;
    }
    return message;

}

function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;

    }

}