import chalk from 'chalk'
import { defineCommand } from 'citty'
import consola from 'consola'

export default defineCommand({
  meta: {
    name: 'github',
    description: 'This is a command to open my github profile',
  },

  async setup() {
    // fetch the github profile

    consola.info('Fetching my github profile...')
    const res = await fetch('https://api.github.com/users/lambrohan')
    const info: any = await res.json()

    console.log(`${chalk.bold('Name:')} ${info.name}\n${chalk.bold('Bio:')} ${info.bio}\n${chalk.bold('Location:')} ${info.location}\n${chalk.bold('Public Repos:')} ${info.public_repos}\n${chalk.bold('Github:')} ${chalk.blue(info.html_url)}`)
  },

})
