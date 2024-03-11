const input = require('sync-input')
const { log } = console;

machine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

const spends = {
    1: {water: 250, milk: 0, beans: 16},
    2: {water: 350, milk: 75, beans:20},
    3: {water: 200, milk: 100, beans:12}
}
const cost = {
    1: 4,
    2: 7,
    3: 6
}

const logInfo = () => {
    log("\nThe coffee machine has:\n" +
        `${machine["water"]} ml of water\n` +
        `${machine["milk"]} ml of milk\n` +
        `${machine["beans"]} g of coffee beans\n` +
        `${machine["cups"]} disposable cups\n` +
        `$${machine["money"]} of money\n`);
}

while (1) {
    log("Write action (buy, fill, take, remaining, exit):");
    let action = input();

    if (action === "buy") {
        log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
        let option = input();
        if (option === "back") continue;

        let flag = false;
        for (let resource of ["water", "milk", "beans"]) {
            if (machine[resource] - spends[option][resource] < 0) {
                console.log(`Sorry, not enough ${resource}!`);
                flag = true;
                break;
            }
        }
        if (flag) continue;
        for (let resource of ["water", "milk", "beans"]) {
            machine[resource] -= spends[option][resource];
        }
        console.log("I have enough resources, making you a coffee!");
        machine["cups"]--;
        machine["money"] += cost[option];
    } else if (action === "fill") {
        log("Write how many ml of water you want to add:");
        let waterMlToAdd = parseInt(input());

        log("Write how many ml of milk you want to add: ");
        let milkMlToAdd = parseInt(input());

        log("Write how many grams of coffee beans you want to add:");
        let beansGramsToAdd = parseInt(input());

        log("Write how many disposable cups you want to add:");
        let cupsToAdd = parseInt(input());

        machine["water"] += waterMlToAdd;
        machine["milk"] += milkMlToAdd;
        machine["beans"] += beansGramsToAdd;
        machine["cups"] += cupsToAdd;
    } else if (action === "take") {
        log(`I gave you $${machine["money"]}`);
        machine["money"] = 0;
    } else if (action === "remaining") {
        logInfo();
    } else if (action === "exit") {
        process.exit(0);
    }
}
