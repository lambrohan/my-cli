import { defineCommand } from 'citty'
import github from './commands/github'
import edu from './commands/edu'
import skills from './commands/skills'

export const main = defineCommand({
  meta: {
    name: 'Rohan\'s CLI',
    description: 'This is my resume in the form of a CLI',
  },
  subCommands: {
    github,
    edu,
    skills,
  },

  async setup() {
  },

})
