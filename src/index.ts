import { Client } from 'discord.js'

const app = new Client({ intents: [] })

app.on('ready', (client) => {
  console.log('started')

  for (const key of client.guilds.cache) {
    console.log(key)
  }
})

app.login(process.env.DISCORD_TOKEN)
