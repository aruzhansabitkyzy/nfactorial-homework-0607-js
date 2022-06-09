const { menu , listMenu }  = require('./products.js');
let allowed = false;
const arguments = process.argv;
const chalk = require('chalk');

function allowedd() {
    let time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric" });
    if (parseInt(time.slice(0, 2)) >= 9 && (parseInt(time.slice(0, 2)) <= 18)) {
        allowed = true;
    }
    if(!allowed) {
        console.log("Sorry we are closed!");
        return false;
    }
}

function getOrder() {
    // if(allowedd()){
    // str = arguments[1]['args'][0].trim()
    for(let i=0;i<2;i++) {
        if(arguments[1]['args'] !== undefined) {
           makeOrder(arguments[1]['args']);
            break;
        }
    // }
}
}
function makeOrder(...items) {
    let price = 0;
    items[0].forEach((item) => {
        itemObj = menu.filter(function (el) {
            if (el.name == item) {
                return el;
            }
        });
        let data = itemObj[0];
        price += data.price;
    });
    console.log(chalk.greenBright(`Your order is  ${items}  for a price of ${price + 0} tenge`));
}
module.exports = {getOrder};
