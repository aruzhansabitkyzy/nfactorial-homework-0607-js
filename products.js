
let drinks  = {
    'coffee' : {
        'cappucino' : {
            price : 800
        },
        'latte' : {
            price : 750
        }
    },
    'tea' : {
        'green' : {
            price : 560
        },
        'black' : {
            price : 250
        }
    }
}
let deserts  = {
    'cake' : {
        'chocolate' : {
            price : 1600
        },
        'strawberry' : {
            price : 1400
        }
    },
    'waffles' : {
        price : 1000
    }
}

let menu = [drinks, deserts];

function listMenu(t) {
    if(t == 1) {
        for(let i=0;i<drinks.length;i++) {
            console.log(drinks[i]);
        }
    }
    else {
        for(let i=0;i<deserts.length;i++) {
            console.log(deserts[i]);
        }
    }
}


let createItem  = function(category, name, price) {
     switch(category) {
         case 'desert': deserts.push({name :  price}); break;
         case 'drinks' : drinks.push({name : price}); break;
     }
}

let deleteItem = (category, item) => menu[category][item].pop();

export {listMenu};

