const Conf = require('conf');
const config = new Conf();
const chalk = require('chalk');
const arguments = process.argv;

let menu;
if(config.get('menu') ) {
     menu = config.get('menu');
}else {
    menu = [
        { name: "coffee", price: 800, flavour: "cappucino" },
        { name: "tea", price: 300, flavour: "green" },
        { name: "cake", price: 1600, flavour: "chocolate" },
        { name: "waffles", price: 1000, flavour: "strawberry" }
    ]
    config.set('menu', menu);
}
const listMenu = () => {
    let menu = config.get('menu');
    console.log(chalk.cyan("Welcome to Dalida's tea cafe"));
    for (item in menu) {
        console.log(chalk.blue(`${menu[item]['name']} (${menu[item]['flavour']}): ${menu[item]['price']}`));
    }
}

const createItem = (name, price, flavor) => {
    let newMenu = config.get('menu');
    newMenu.push({ name: name, price: price, flavour: flavor });
    config.set('menu', newMenu);
    console.log(chalk.green(`${name} is added successfully`));
    listMenu();
}

const deleteItem = (name) => {
    let newMenu = config.get('menu');
    newMenu.forEach((item, index) => {
        const data = Object.values(item);
        const dataName = data[0];
        if (dataName == name) {
            menu = newMenu.splice(index, 1);
             config.set('menu', newMenu);
            // config.delete(config.get('menu')[index]);
            console.log(chalk.red(`${dataName} is deleted successfully`));
        }
    });
    listMenu();
};

module.exports = { listMenu, deleteItem, createItem, menu };
