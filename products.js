const conf = new(require('conf'))()
let menu  = [
    {name: "coffee", price : 800, flavour : "cappucino"},
    {name: "tea", price : 300, flavour : "green"},
    {name: "cake", price : 1600, flavour : "chocolate"},
    {name: "waffles", price : 1000, flavour : "strawberry"}
]
function listMenu() {
    console.log("Добро пожаловать в чайную Далиды !");
        for(item in menu) {
            console.log(menu[item]);
        }
    
}

let createItem  = function(name, price, flavour) {
            menu.push({name: name, price: price, flavour: flavour});
}

let deleteItem = (name) => 
    menu.forEach((item, index, menu) => {
           const data = Object.values(item);
           const dataName = data[0];
           if(dataName == name) {
                console.log(dataName);
                menu.splice(index, 1);
           }
})

