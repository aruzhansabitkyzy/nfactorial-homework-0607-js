const conf = require('config');
const chalk = require('chalk');
const arguments = process.argv;
let menu = [
    { name: "coffee", price: 800, flavour: "cappucino" },
    { name: "tea", price: 300, flavour: "green" },
    { name: "cake", price: 1600, flavour: "chocolate" },
    { name: "waffles", price: 1000, flavour: "strawberry" }
]

function listMenu() {
    console.log(chalk.cyan("Welcome to Dalida's tea cafe"));
    for (item in menu) {
        console.log(chalk.blue(`${menu[item]['name']} (${menu[item]['flavour']}): ${menu[item]['price']}`));
    }
}

let createItem = function (name, price, flavour) {
    
    str = arguments[1]['args'];
    menu.push({ name: str[0], price: str[1], flavour: str[2] });
    console.log(chalk.green(`${str[0]} is added successfully`));
    listMenu();
}

function deleteItem() {
    menu.forEach((item, index, menu) => {
        const data = Object.values(item);
        const dataName = data[0];
        if (dataName == arguments[0]) {
            menu = menu.splice(index, 1);
            console.log(chalk.red(`${dataName} is deleted successfully`));
        }
       });
       listMenu();
};

module.exports = {listMenu, deleteItem, createItem , menu};
