#! /usr/bin/env node
const program = new(require('commander'));
const chalk = require('chalk');

program 
    .command('list')
    .description('List the menu')
    .action('listMenu')
module.exports('listMenu');
const list = require('../products.js');
program.parse();
