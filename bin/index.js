#! /usr/bin/env node
const { program }  = require('commander');
const { listMenu, deleteItem, createItem } = require('../products.js');
const { getOrder } = require('../customers.js');

program 
    .command('list')
    .description('List the menu')
    .action(listMenu)

program 
    .command('deleteItem')
    .argument("<string>", "name")
    .description('Deletes the item from the menu')
    .action(deleteItem)

program
    .command('createItem')
    .description('Creates an item to the menu')
    .action(createItem)

program 
    .command('order')
    .description('Make your order')
    .action(getOrder)

program.parse();
