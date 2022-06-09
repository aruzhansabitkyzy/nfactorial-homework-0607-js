#! /usr/bin/env node
const { program }  = require('commander');
const list = require('..products.js');

program 
    .command('list')
    .description('List the menu')
    .action('listMenu')

program.parse();
