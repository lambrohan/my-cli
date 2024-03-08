import chalk from 'chalk'
import { defineCommand } from 'citty'
import { databases, frameworks, infra, programmingLanguages } from '../utils/constants'

export default defineCommand({
  meta: {
    name: 'skills',
    description: 'This is a command to show my skills',
  },

  async setup() {
    // languages
    console.log(chalk.green('Programming Languages:'))
    console.log(`${programmingLanguages.reduce((acc, lang, idx) => `${acc}${idx > 0 ? chalk.blue(' | ') : ''}${lang.name}`, '')}`)

    // frameworks
    console.log(chalk.green('\nFrameworks:'))
    console.log(`${frameworks.reduce((acc, lang, idx) => `${acc}${idx > 0 ? chalk.blue(' | ') : ''}${lang.name}`, '')}`)

    // databases
    console.log(chalk.green('\nDatabases:'))
    console.log(`${databases.reduce((acc, lang, idx) => `${acc}${idx > 0 ? chalk.blue(' | ') : ''}${lang.name}`, '')}`)

    // infra
    console.log(chalk.green('\nInfra:'))
    console.log(`${infra.reduce((acc, lang, idx) => `${acc}${idx > 0 ? chalk.blue(' | ') : ''}${lang.name}`, '')}`)
  },

})
