const input = require('sync-input');

let water = input('Write how many ml of water the coffee machine has:');
let milk = input('Write how many ml of milk the coffee machine has:')
let beans = input('Write how many grams of coffee beans the coffee machine has:')
let cups = input('Write how many cups of coffee you will need:') - 0;

let coffee = Math.floor(Math.min(water/200, milk/50, beans/15));

if (cups === coffee) {
    console.log('Yes, I can make that amount of coffee');
}else if (cups < coffee) {
    console.log(`Yes, I can make that amount of coffee (and even ${coffee-cups} more than that)`);
}else {
    console.log(`No, I can make only ${coffee} cup(s) of coffee`);
}
