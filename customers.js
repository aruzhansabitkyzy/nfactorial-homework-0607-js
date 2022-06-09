import {menu, listMenu, deleteItem, createItem } from './products.js';
let allowed = false; 
let time = new Date().toLocaleTimeString('en-GB', {hour : "numeric" , minute : "numeric"});

if(parseInt(time.slice(0, 2)) >= 9 && (parseInt(time.slice(0, 2)) <= 18)) {
    allowed = true;
}
if(allowed) {
        listMenu();
        getOrder('cappucino', 'cake', 'waffles');
}
else {
    console.log("Sorry we are closed!");
}




    function getOrder(...items) {
            let price = 0;
            items.forEach((item) =>  {
                itemObj = menu.filter(function(el) {
                    if(el.name == item) {
                        return el;
                    }
                });
                let data = itemObj[0];
                price += data.price;
            });
            console.log(`The order is  ${items}  for a price of ${price + 0}`);
}
