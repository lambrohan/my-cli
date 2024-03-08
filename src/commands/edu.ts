import chalk from 'chalk'
import { defineCommand } from 'citty'

export default defineCommand({
  meta: {
    name: 'edu',
    description: 'This is a command to show my education info',
  },

  async setup() {
    // fetch the github profile
    console.log(`${chalk.green('Here is my education info:\n')}`)
    console.log(`${chalk.bold('University')}: Shivaji University, Kolhapur\n${chalk.bold('Degree')}: Bachelor of Engineering (Mechanical)\n${chalk.bold('Year')}: 2013-2017\n`)
  },

})
