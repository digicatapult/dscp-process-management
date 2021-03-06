#!/usr/bin/env node --es-module-specifier-resolution=node

import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'
import { Command } from 'commander'
import { getLastTokenId } from './lib/lastToken.js'

const program = new Command()

clear()
console.log(chalk.red(figlet.textSync('Process CLI', { horizontalLayout: 'full' })))

program.action(() => {
  getLastTokenId()
})

program.parse()

