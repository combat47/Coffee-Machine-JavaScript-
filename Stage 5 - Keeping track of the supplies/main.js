const input = require('sync-input')

const coffeeMachine = { water: 400, milk: 540, beans: 120, cups: 9, money: 550 };

const consumables = [{ water: -250, milk: 0, beans: -16, cups: -1, money: 4 },
    { water: -350, milk: -75, beans: -20, cups: -1, money: 7 },
    { water: -200, milk: -100, beans: -12, cups: -1, money: 6 }];

const actionRemaining = () => {
    console.log(`
The coffee machine has:
${coffeeMachine["water"]} ml of water
${coffeeMachine["milk"]} ml of milk
${coffeeMachine["beans"]} g of coffee beans
${coffeeMachine["cups"]} disposable cups
$${coffeeMachine["money"]} of money`);
};

const actionBuy = () => {
    const inputBuy = input(`\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n`);
    if (inputBuy === "back") return;
    for (let consumable in coffeeMachine) {
        if (coffeeMachine[consumable] >= Math.abs(consumables[inputBuy - 1][consumable])) coffeeMachine[consumable] += consumables[inputBuy - 1][consumable];
        else return console.log(`\nSorry, not enough ${coffeeMachine[consumable]}`)
    }
    console.log(`I have enough resources, making you a coffee!`);
};

const actionFill = () => {
    coffeeMachine["water"] += Number(input("\nWrite how many ml of water you want to add:\n"));
    coffeeMachine["milk"] += Number(input("\nWrite how many ml of milk you want to add:\n"));
    coffeeMachine["beans"] += Number(input("\nWrite how many grams of coffee beans you want to add:\n"));
    coffeeMachine["cups"] += Number(input("\nWrite how many disposable coffee cups you want to add:\n"));
};

const actionTake = () => {
    console.log(`I gave you $${coffeeMachine["money"]}`);
    coffeeMachine["money"] = 0;
};

const action = () => {
    let inputAction = input(`\nWrite action (buy, fill, take, remaining, exit):\n`);
    while(inputAction !== "exit") {
        if (inputAction === "buy") actionBuy();
        if (inputAction === "fill") actionFill();
        if (inputAction === "take") actionTake();
        if (inputAction === "remaining") actionRemaining();
        inputAction = input("\nWrite action (buy, fill, take, remaining, exit):\n");
    }
};

action();
