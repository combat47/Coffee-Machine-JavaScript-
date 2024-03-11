const input = require('sync-input')
const cups = Number(input('Write how many cups of coffee you will need:\n'));
let water = 200;
let milk = 50;
let coffee = 15;
console.log(`For ${cups} cups of coffee you will need:
${cups * water} ml of water
${cups * milk} ml of milk
${cups * coffee} g of coffee beans`);
